const User = require("../../../database/models/userModel");

exports.GetAll = async (args) => {
  const users = await User.query();
  console.log("users ", users);
  return users;
};
