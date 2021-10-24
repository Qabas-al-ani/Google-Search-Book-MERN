// importing gql from the Apollo
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # declaring type book with it values
  type Book {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }
  # declaring type User with it values
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  # declaring type Auth with it values
  type Auth {
    token: ID!
    user: User
  }
  # declaring Save book input with it values
  input SavedBookInput {
    authors: [String]
    title: String
    description: String
    bookId: String
    image: String
    link: String
  }
  # declaring me to the user
  type Query {
    me: User
  }
  # declaring the mutation types
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
