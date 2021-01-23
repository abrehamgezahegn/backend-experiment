const { gql } = require("apollo-server-express");

const Order = gql`
  extend type Query {
    orders: [Order]
    order: Order
  }
  extend type Mutation {
    createOrder(data: createOrderInput!): Order!
  }

  type Order {
    id: ID!
    pickUpCountry: String!
    destinationCountry: String!
    user: User!
    # details: JSON
  }

  input createOrderInput {
    pickUpCountry: String!
    destinationCountry: String!
    user: ID!
  }
`;

module.exports = Order;
