const getFieldNames = require("graphql-list-fields");

const user = async (_, args, { req, model, utils, services, auth }) => {
  auth();
  return await services.User.GetOne(args);
};

const users = async (_, args, { req, model, utils, services, auth }, info) => {
  console.log("users resolver hit");
  auth();
  return await services.User.GetAll(args);
};

const createUser = async (_, args, { services }) => {
  return await services.User.Create(args);
};

const fullName = async (user, args) => {
  return user.firstName + " " + user.lastName;
};

const orders = async (user, args, { services }, info) => {
  const fields = getFieldNames(info);
  return await services.Order.GetUserOrders({
    userId: user.id,
    fields,
  });
};

module.exports = {
  Query: { user, users },
  Mutation: { createUser },
  User: { fullName, orders },
};
