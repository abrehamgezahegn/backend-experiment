require("dotenv").config();

const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const knex = require("knex");
const { Model } = require("objection");

const api = require("./api");

const app = express();
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const path = "/graphql";

// app.use(path, (req, res, next) => checkJwt(req, res, next));
const knexConnection = knex({
  client: "postgres",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

Model.knex(knexConnection);

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
   
*These questions are general questions but are  based on the financr backend code base.

    How do you handle errors?

    Is there any reason why you are not using unions in the graphql schema?

    Why is the purpose of using interface types to type the methods and functions?
    Service functions for example.
    
    const FetchAll = async (args: QueryMessagesArgs
    ): Promise<Partial<Message>[]>
    
    What is the purpose of using find-config?

    import dotEnv from "dotenv";
    import findConfig from "find-config";
    dotEnv.config({ path: findConfig(`.env`)! });


    How does table relations work between graphql and objection ?

    You are not avoiding require loop by importing models inside the
    relationMappings method. But that doesn't seem to break the code. 
    Why is that?

    What's the point of objection's relational mapping if the relation is laid out in the graphql schema?

    What is seed in the context of databases?

    
    Is there any reason you put nested resolvers directly inside the services (custom folder) but not in the resolver file of the schema?  

    Can you go over the structure of the webhooks?

    I couldn't find any aws cognito code in the codebase. Is the auth handled only by aws? If so how does the backend access the users?











*/
