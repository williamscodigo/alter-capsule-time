import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      capsules {
        _id
        capsuleMessage
        capsuleAuthor
        share
        unlockDate
        createdAt
      } 
    }
  }
`;


export const QUERY_SHARED_CAPSULES = gql`
  query getSharedCapsules {
  sharedCapsules {
    _id
    capsuleMessage
    capsuleAuthor
    share
    unlockDate
    createdAt
  }
}
`;

export const QUERY_SINGLE_CAPSULE = gql`
  query getSingleCapsule($capsuleId: ID!) {
    Capsule(capsuleId: $capsuleId) {
      _id
      capsuleMessage
      capsuleAuthor
      share
      unlockDate
      createdAt
    }
  }
`;
