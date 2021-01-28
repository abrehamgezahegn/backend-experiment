const DataLoader = require("dataloader");

const { User } = require("../../../database/models");
const GetOne = async ({ userId }) => {
  return await User().findById(userId);
};

const GetOneLoader = new DataLoader(async (ids) => {
  return await User().whereIn("id", ids);
});

module.exports = {
  GetOneLoader,
  GetOne,
};
