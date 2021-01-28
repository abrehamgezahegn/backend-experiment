const { Order } = require("../../../database/models");

exports.Create = async ({ args }) => {
  const order = await Order().insert({
    ...args.data,
    userId: args.data.user,
  });

  return order;
};
