const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const knex = require("knex");

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

// const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
// const PORT = Number(process.env.PORT) || 4000;

// const server = app.listen(PORT, HOSTNAME, () => {
//   const address = server.address();
//   const origin = !address
//     ? "unknown address"
//     : typeof address === "string"
//     ? address
//     : "http://" + address.address + ":" + address.port;

//   console.info(`\nExpress server listening at ${origin}`);
//   console.info(
//     `\nGraphQL ready at ${address ? origin : ""}${apolloServer.graphqlPath}`
//   );
// });

/*

    QUESTIONS 
      - How do we do error handling?
      - Why are you not using unions?
      - Can the service methods be improved to receive 
        a uniform parameters?
      - The JSON type is not working for me
      - Why is the use of this kind of types?  Resolver<Partial<Review> ?
        I think they are interfaces.
      - What does purpose of using find-config
      - 

*/
