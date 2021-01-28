const { Order } = require("../../../database/models");

exports.GetUserOrders = async ({ userId, fields }) => {
  return await Order()
    .where("userId", userId)
    .select("id", ...fields);
};
