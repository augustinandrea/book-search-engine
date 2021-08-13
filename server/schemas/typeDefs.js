const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: String
    description: String
    bookId: String
    link: String
    title: String
  }

  type User {
      username: String
      email: String
      password: String
      savedBooks: [bookSchema]
  }

  type Query {
    books: [Book]
    book(title: String!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, pages: Int!): Book
  }
`;

module.exports = typeDefs;