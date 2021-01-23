const User = require("../../../database/models/userModel");

exports.GetAll = async (args) => {
  const users = await User();
  return users;
};
