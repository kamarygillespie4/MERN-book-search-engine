import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query allUsers {
    users {
      _id
      username
      bookCount
      savedBooks {
        bookId
        title
        authors
      }
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      username
      bookCount
      savedBooks {
        bookId
        title
        authors
      }
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
