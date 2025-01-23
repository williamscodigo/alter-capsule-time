const typeDefs = `
  scalar Date

  type User {
    _id: ID
    username: String
    email: String
    name: String
    password: String
    capsules: [capsule]!
  }

  type capsule {
    _id: ID
    capsuleMessage: String
    capsuleAuthor: String
    share: Boolean
    unlockDate: Date
    createdAt: Date
  
  }

 
  input capsuleInput {
    capsuleMessage: String!
    capsuleAuthor: String!
    share: Boolean!
    unlockDate: Date!
  }

  input UserInput {
    username: String!
    email: String!
    name: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }



  type Query {
    sharedCapsules: [capsule]
    Capsule(capsuleId: ID!): capsule
    
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    addCapsule(input: capsuleInput!): capsule
    removeCapsule(capsuleId: ID!): capsule

  }
`;
export default typeDefs;
