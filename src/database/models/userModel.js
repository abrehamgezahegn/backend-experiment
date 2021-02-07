const { Model } = require("objection");
const models = require("./index");

class User extends Model {
  static get tableName() {
    return "users";
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "phoneNumber"],
      properties: {
        email: { type: "string" },
        phoneNumber: { type: "string" },
        firstName: {
          type: "string",
        },
        lastName: { type: "string" },
        role: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: models.Order,
        join: {
          from: "users.id",
          to: "orders.userId",
        },
      },
      pages: {
        relation: Model.ManyToManyRelation,
        modelClass: models.Page,
        join: {
          from: "users.id",
          through: {
            from: "page_membership.userId",
            to: "page_membership.pageId",
          },
          to: "page.id",
        },
      },
    };
  }
}

module.exports = User;
