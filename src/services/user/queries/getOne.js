const DataLoader = require("dataloader");
const updateUserInfo = require("../../../workers/userUpdate/producer");

const { User } = require("../../../database/models");
const GetOne = async ({ id }) => {
  /* relation examples 
   Get user orders 
   const user = await User.query().findById(id);
   const orders = await user.$relatedQuery("orders");
   
   Get user pages
    const user = await User.query().findById(id);
    const pages = await user.$relatedQuery("pages");
    console.log("pages", pages);

    Filter users by order table data

    const users = await User.query()
      .joinRelated("orders")
      .where("orders.destinationCountry", "USA");
    console.log("filtered users", result);

  */

  const user = await User.query().findById(id);
  if (!user) throw new Error("user doesn't exist");
  const res = await updateUserInfo({ user });
  // console.log("update user producer res", res);
  return user;
};

const GetOneLoader = new DataLoader(async (ids) => {
  return await User.query().whereIn("id", ids);
});

module.exports = {
  GetOneLoader,
  GetOne,
};
