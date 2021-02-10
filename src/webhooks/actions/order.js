const { Update } = require("../../services/order/mutations/update");

const updateOrder = (data) => {
  throw new Error("adf");
  const order = { ...data, userId: data.userId.id };
  const args = {
    id: data.id,
    data: order,
  };
  Update({ args });
};

module.exports = {
  updateOrder,
};
