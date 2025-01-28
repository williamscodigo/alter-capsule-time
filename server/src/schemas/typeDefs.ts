const typeDefs = `
  scalar Date

  type User {
    _id: ID
    username: String
    email: String
    password: String
    capsules: [Capsule]!
  }

  type Capsule {
    _id: ID
    capsuleMessage: String
    capsuleAuthor: String
    share: Boolean
    unlockDate: Date
    createdAt: Date
  
  }

 
  input CapsuleInput {
    capsuleMessage: String!
    capsuleAuthor: String!
    share: Boolean!
    unlockDate: Date!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }



  type Query {
    sharedCapsules: [Capsule]
    Capsule(capsuleId: ID!): Capsule
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    addCapsule(input: CapsuleInput!): Capsule
    removeCapsule(capsuleId: ID!): Capsule
  }
`;

export default typeDefs;
