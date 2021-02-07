const { Order, Page, PageMembership } = require("../../../database/models");

exports.Create = async ({ args }) => {
  const order = await Order.query().insert({
    ...args.data,
    userId: args.data.user,
  });

  // transaction practice
  // const trx = await Page.startTransaction();

  // try {
  //   const page = await Page.query(trx).insert({
  //     name: "Life",
  //     followerCount: 200,
  //   });

  //   const pageMembership = await PageMembership.query(trx).insert({
  //     userId: args.data.user,
  //     pageId: page.id,
  //   });
  //   trx.commit();
  // } catch (error) {
  //   trx.rollback();
  //   throw new Error(error);
  // }

  return order;
};
