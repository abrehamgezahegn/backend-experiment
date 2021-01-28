const orders = (_, args, { services }) => {
  return services.Order.GetAll();
};

const createOrder = (_, args, { services }) => {
  return services.Order.Create({ args });
};

const user = async (parent, args, { services }) => {
  // batching
  return await services.User.GetOneLoader.load(parent.userId);
};

module.exports = {
  Query: {
    orders,
  },
  Mutation: {
    createOrder,
  },
  Order: {
    user,
  },
};
