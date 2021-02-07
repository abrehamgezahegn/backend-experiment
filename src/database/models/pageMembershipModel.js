const { Model } = require("objection");
const models = require("./index");

class PageMembership extends Model {
  static get tableName() {
    return "page_membership";
  }
}

module.exports = PageMembership;
