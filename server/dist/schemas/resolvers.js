import { Capsule, User } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';
import { sendEmail } from '../utils/emails.js';
import schedule from 'node-schedule';
import { GraphQLScalarType, Kind } from 'graphql';
const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Custom Date scalar type',
    parseValue(value) {
        return new Date(value);
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
        Capsule: async (_parent, { CapsuleId }) => {
            return await Capsule.findOne({ _id: CapsuleId });
        },
        sharedCapsules: async () => {
            return await Capsule.find({ "share": 'True' });
        },
    },
    Mutation: {
        addUser: async (_parent, { input }) => {
            const user = await User.create({ ...input });
            const token = signToken(user.username, user.email, user._id);
            return { token, user };
        },
        login: async (_parent, { email, password }) => {
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
        addCapsule: async (_parent, { input }, context) => {
            if (context.user) {
                const capsule = await Capsule.create({ ...input });
                await User.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { Capsules: capsule._id } });
                const sendAt = capsule.unlockDate;
                const to = context.user.email;
                const subject = 'Your capsule is unlocked!';
                const text = capsule.capsuleMessage;
                schedule.scheduleJob(sendAt, () => {
                    sendEmail(to, subject, text);
                });
                return capsule;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeCapsule: async (_parent, { CapsuleId }, context) => {
            if (context.user) {
                const capsule = await Capsule.findOneAndDelete({
                    _id: CapsuleId
                });
                if (capsule) {
                    throw AuthenticationError;
                }
                return capsule;
            }
            throw AuthenticationError;
        },
    },
};
export default resolvers;
