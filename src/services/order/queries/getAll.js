const { Order } = require("../../../database/models");

exports.GetAll = async (args) => {
  return await Order();
};
