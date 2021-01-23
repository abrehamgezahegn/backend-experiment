const { Model } = require("objection");

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
    const Order = require("./orderModel");
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: {
          from: "users.id",
          to: "orders.userId",
        },
      },
    };
  }
}

module.exports = () => User.query();
