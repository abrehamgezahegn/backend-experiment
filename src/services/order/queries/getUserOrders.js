const { Order } = require("../../../database/models");

exports.GetUserOrders = async ({ userId, fields }) => {
  return await Order.query()
    .where("userId", userId)
    .select("id", ...fields);
};
