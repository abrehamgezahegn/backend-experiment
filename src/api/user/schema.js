const { gql } = require("apollo-server-express");

const User = gql`
  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(data: createUserInput): User
  }

  input createUserInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
  }
`;

module.exports = User;
