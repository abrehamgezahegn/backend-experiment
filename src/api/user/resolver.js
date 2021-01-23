const user = async (_, args, { req, model, utils, services, auth }) => {
  auth();
  return await services.User.GetOne(args);
};

const users = async (_, args, { req, model, utils, services, auth }) => {
  auth();
  return await services.User.GetAll(args);
};

const createUser = async (_, args, { services }) => {
  return await services.User.Create(args);
};

module.exports = {
  Query: { user, users },
  Mutation: { createUser },
};
