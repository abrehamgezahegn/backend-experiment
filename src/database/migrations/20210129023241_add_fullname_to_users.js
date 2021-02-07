exports.up = function (knex) {
  return Promise.all([
    knex.schema.table("users", (table) => {
      table.string("fullName");
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.table("users", (table) => {
      table.dropColumn("fullName");
    }),
  ]);
};
