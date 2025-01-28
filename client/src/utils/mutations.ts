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

export const REMOVE_CAPSULE = gql`
  mutation RemoveCapsule($capsuleId: ID!) {
    removeCapsule(capsuleId: $capsuleId) {
      _id
    }
  }
`;

//should we allow comments to capsules?
// export const ADD_COMMENT = gql`
//   mutation addComment($capsuleId: ID!, $commentText: String!) {
//     addComment(capsuleId: $capsuleId, commentText: $commentText) {
//       _id
//       capsuleMessage
//       capsuleAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
