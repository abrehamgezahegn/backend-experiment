const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const api = require("./api");

const app = express();
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const path = "/graphql";

// app.use(path, (req, res, next) => checkJwt(req, res, next));

const apolloServer = new ApolloServer(api);

apolloServer.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.info(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  )
);
