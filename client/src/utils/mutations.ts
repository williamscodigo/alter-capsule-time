import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
       user {
      _id
      username
      email
    }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($input: UserInput!) {
  addUser(input: $input) {
    user {
      _id
      username
      email
    }
    token
  }
}
`;

//must specify all fields returned from the mutation
export const ADD_CAPSULE = gql`
mutation AddCapsule($input: CapsuleInput!) {
  addCapsule(input: $input) {
    _id
    capsuleMessage
  }
}
`;

//should we allow comments to capsules?
// export const ADD_COMMENT = gql`
//   mutation addComment($thoughtId: ID!, $commentText: String!) {
//     addComment(thoughtId: $thoughtId, commentText: $commentText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
