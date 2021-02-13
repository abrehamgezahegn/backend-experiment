require("dotenv").config();

const knex = require("knex");
const { Model } = require("objection");
const dbConfig = require("../../database/knexfile");

const env = process.env.NODE_ENV || "development";
const knexConnection = knex(dbConfig[env]);

Model.knex(knexConnection);

const { User } = require("../../database/models");

// const Queue = require("bull");

// const updateUser = new Queue("update-user");

console.log("User update consumer is running");

// updateUser.process(
const updateUser = async (job, done) => {
  console.log("update user worker ran");
  const user = job.data.user;
  const randomNum = Math.random() * 100;
  const randString = JSON.stringify(randomNum).slice(0, 3);
  console.log("updating with", randString);
  // console.log("jobs", await job.getJobCounts());
  try {
    const res = await User.query()
      .findById(user.id)
      .patch({
        ...user,
        lastName: "consumed" + randString,
      });
    console.log("updated user");
    throw new Error("baba");
    done();
  } catch (error) {
    console.log("bubble spaceee ", error);
  }
};

module.exports = updateUser;

// );

/*
 - how are consumers deployed?
 - how do you monitor the workers?
 - 

*/
