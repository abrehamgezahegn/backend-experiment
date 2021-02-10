const { Order } = require("../../../database/models");

exports.Update = async ({ args }) => {
  const order = await Order.query()
    .patchAndFetchById(args.id, {
      ...args.data,
    })
    .returning();
  return order;
};
