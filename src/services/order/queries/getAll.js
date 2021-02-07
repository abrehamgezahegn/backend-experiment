const { Order } = require("../../../database/models");

exports.GetAll = async (args) => {
  // const order = await Order.query().findById(
  //   "f007397f-fa86-4601-9095-2267c7fc4ad8"
  // );

  // const user = await order.$relatedQuery("user");

  // console.log("order user", user);

  return await Order.query();
};
