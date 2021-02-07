// const { gql } = require("apollo-server-express");

const User = /* GraphQL */ `
  # directive @auth()

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(data: CreateUserInput): User
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    role: UserRole
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    role: UserRole
    orders: [Order]
    fullName: String
  }

  enum UserRole {
    Courier
    Supplier
    Artist
  }
`;

module.exports = User;
