import { Capsule, User } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';
import { sendEmail } from '../utils/emails.js';
import schedule from 'node-schedule';
import { GraphQLScalarType, Kind } from 'graphql';



interface AddUserArgs {
  input: {
    username: string;
    email: string;
    password: string;
  }
}

interface LoginUserArgs {
  email: string;
  password: string;
}


interface CapsuleArgs {
  capsuleId: string;
}

interface AddCapsuleArgs {
  input: {
    capsuleMessage: string;
    capsuleAuthor: string;
    share: boolean;
    unlockDate: Date;
  }
}

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom Date scalar type',
  parseValue(value) {
    return new Date(value as string | number | Date); 
  },
  serialize(value) {
    return value instanceof Date ? value.toISOString() : null; 
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); 
    }
    return null;
  },
});

const resolvers = {
  Date: dateScalar,
  Query: {
    Capsule: async (_parent: any, { capsuleId }: CapsuleArgs) => {
      return await Capsule.findOne({ _id: capsuleId });
    },
    sharedCapsules: async () => {
      return await Capsule.find({share: true, unlockDate:{$lt:Date.now()}}); 
    },
    me: async (_parent: any, _args: any, context: any) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('capsules');
      }
      throw new AuthenticationError('Could not authenticate user.');

    },
  },
  Mutation: {
    addUser: async (_parent: any, { input }: AddUserArgs) => {
      
      const user = await User.create({ ...input });

      const token = signToken(user.username, user.email, user._id);


      return { token, user };
    },

    login: async (_parent: any, { email, password }: LoginUserArgs) => {

      const user = await User.findOne({ email });


      if (!user) {
        throw new AuthenticationError('Could not authenticate user.');
      }


      const correctPw = await user.isCorrectPassword(password);


      if (!correctPw) {
        throw new AuthenticationError('Could not authenticate user.');
      }


      const token = signToken(user.username, user.email, user._id);

      

      return { token, user };
    },
    addCapsule: async (_parent: any, { input }: AddCapsuleArgs, context: any) => {
      if (context.user) {
        const capsule = await Capsule.create({ ...input });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { capsules: capsule._id } }
        );

        const sendAt = capsule.unlockDate;
        const to =  context.user.email;
        const subject = 'Your capsule is unlocked!';
        const text = capsule.capsuleMessage;
        schedule.scheduleJob(sendAt, () => {
          sendEmail(to, subject, text);
        });

        return capsule;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeCapsule: async (_parent: any, { capsuleId }: CapsuleArgs, context: any) => {
      console.log('Context User:', context.user);
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
    
      const capsule = await Capsule.findOneAndDelete({
        _id: capsuleId
      });
    
      if (!capsule) {
        throw new Error('Capsule not found or already deleted.');
      }
    
      return capsule;
    },    
   
  },
};

export default resolvers;
