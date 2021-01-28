const { GetAll } = require("../order/queries/getAll");
const { Create } = require("../order/mutations/create");
const { GetUserOrders } = require("../order/queries/getUserOrders");

module.exports = {
  GetAll,
  GetUserOrders,
  Create,
};
