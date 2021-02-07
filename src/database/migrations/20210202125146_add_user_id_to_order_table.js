exports.up = function (knex) {
  knex.schema.table("order", (table) => {
    table.uuid("userId").references("id").onTable("user");
  });
};

exports.down = function (knex) {
  knex.schema.table("order", (table) => {
    table.dropColum("userId");
  });
};
