const { Model } = require("objection");

class Order extends Model {
  static get tableName() {
    return "orders";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        pickupCountry: {
          type: "string",
        },
        destinationCountry: {
          type: "string",
        },
      },
    };
  }

  static get relationMappings() {
    const User = require("./userModel");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "orders.id",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = () => Order.query();
