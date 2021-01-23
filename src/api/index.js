const { makeExecutableSchema } = require("@graphql-tools/schema");
const GraphQLJSON = require("graphql-type-json");

const User = require("./user/schema");
const userResolver = require("./user/resolver");

const Order = require("./order/schema");
const orderResolver = require("./order/resolver");

const services = require("../services");

const schema = makeExecutableSchema({
  typeDefs: [User, Order],
  resolvers: {
    Query: {
      ...userResolver.Query,
      ...orderResolver.Query,
    },
    Mutation: {
      ...userResolver.Mutation,
    },
    // JSON: GraphQLJSON,
  },
});

const api = {
  schema,
  context: (req) => ({
    req,
    // model,
    // utils,
    services,
    auth: () => {
      //   if (!req.req.user)
      //     throw new AuthenticationError(
      //       "you must be logged in to query this schema"
      //     );
    },
  }),
};

module.exports = api;
