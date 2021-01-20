const user = async (_, args, { req, model, utils, services, auth }) => {
  auth();
  console.log("userrrr");
  return await services.User.GetUser(args);
};

module.exports = {
  Query: { user },
};
