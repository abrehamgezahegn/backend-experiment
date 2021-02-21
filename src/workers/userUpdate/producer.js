const Queue = require("bull");

const updateUser = new Queue("update-user");

const updateUserInfo = async (data) => {
  console.log("adding user job ");
  return await updateUser.add(data, {
    removeOnComplete: true,
    // backoff: 1000,
  });
};

module.exports = updateUserInfo;
