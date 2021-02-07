exports.up = function (knex) {
  return Promise.all([
    knex.schema.table("users", (table) => {
      table.dropColumn("lastName");
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.table("users", (table) => {
      table.string("lastName");
    }),
  ]);
};
