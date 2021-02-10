const { gql } = require("apollo-server-express");

const Order = gql`
  scalar JSON

  extend type Query {
    orders: [Order]
    order: Order
  }
  extend type Mutation {
    createOrder(data: CreateOrderInput!): Order!
  }

  type Order {
    id: ID!
    pickUpCountry: String!
    destinationCountry: String!
    user(email: String): User
    details: JSON
  }

  input CreateOrderInput {
    pickUpCountry: String!
    destinationCountry: String!
    user: ID!
  }
`;

module.exports = Order;
