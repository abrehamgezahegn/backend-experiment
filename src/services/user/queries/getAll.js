const User = require("../../../database/models/userModel");

exports.GetAll = async (args) => {
  console.log("asking for all users");
  const users = await User.query();
  console.log("users ", users);
  return users;
};
