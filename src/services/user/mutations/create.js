const { User } = require("../../../database/models");

exports.Create = async (args) => {
  const user = await User().insert({
    ...args.data,
  });

  return user;
};
