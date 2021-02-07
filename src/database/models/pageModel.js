const { Model } = require("objection");
const models = require("./index");

class Page extends Model {
  static get tableName() {
    return "page";
  }

  static get relationMappings() {
    return {
      users: {
        from: "page.id",
        through: {
          from: "page_membership.pageId",
          to: "page_membership.userId",
        },
        to: "users.id",
      },
    };
  }
}

module.exports = Page;
