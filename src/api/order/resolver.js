const orders = (_, args, { services }) => {
  return services.Order.GetAll();
};

module.exports = {
  Query: {
    orders,
  },
};
