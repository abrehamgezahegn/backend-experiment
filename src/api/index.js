const { makeExecutableSchema } = require("@graphql-tools/schema");

const User = require("./user/schema");
const userResolver = require("./user/resolver");

const services = require("../services");

const schema = makeExecutableSchema({
  typeDefs: [User],
  resolvers: {
    Query: {
      ...userResolver.Query,
    },
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
