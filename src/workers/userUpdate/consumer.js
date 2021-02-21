require("dotenv").config();

const knex = require("knex");
const { Model } = require("objection");
const dbConfig = require("../../database/knexfile");

const env = process.env.NODE_ENV || "development";
console.log("starting knex connection");
const knexConnection = knex(dbConfig[env]);
console.log("initializing model with connection");
Model.knex(knexConnection);

console.log("model connected");
const { User } = require("../../database/models");

console.log("User update consumer is running");

const updateUser = async (job, done) => {
  const user = job.data.user;
  const randomNum = Math.random() * 100;
  const randString = JSON.stringify(randomNum).slice(0, 3);
  console.log("user ", user);
  try {
    const res = await User.query()
      .findById(user.id)
      .patch({
        ...user,
        lastName: "consumed" + randString,
      });
    console.log("Update user worker done");
    done();
  } catch (error) {
    console.log("update user worker error:  ", error);
  }
};

module.exports = updateUser;

/*
 - how are consumers deployed?
 - how do you monitor the workers?
 - 

*/
