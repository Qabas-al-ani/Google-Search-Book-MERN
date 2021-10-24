// import the graphql
import gql from "graphql-tag";

// export GET_ME that contain me info dependencies
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;
