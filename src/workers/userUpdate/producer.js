const Queue = require("bull");

const updateUser = new Queue("update-user");

const updateUserInfo = async (data) => {
  console.log("adding job ");
  return await updateUser.add(data, {
    repeat: {
      every: 2000,
      limit: 2,
    },
    removeOnComplete: true,
  });
};

module.exports = updateUserInfo;
