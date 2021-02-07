exports.up = function (knex) {
  return Promise.all([
    knex.raw('create extension if not exists "uuid-ossp"'),
    knex.schema.createTable("orders", (table) => {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table
        .uuid("userId")
        .references("id")
        .inTable("users")
        .onDelete("SET NULL");
      table.string("pickUpCountry");
      table.string("destinationCountry");
      table.dateTime("createdAt").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
      table.dateTime("updatedAt").defaultTo(knex.raw(`CURRENT_TIMESTAMP`));
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([knex.schema.dropTable("orders")]);
};
