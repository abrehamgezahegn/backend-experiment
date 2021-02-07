const { Model } = require("objection");
const models = require("./index");

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
        userId: {
          type: "string",
        },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: models.User,
        join: {
          from: "orders.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Order;
