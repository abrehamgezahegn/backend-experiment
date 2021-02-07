const tableName = "users";

exports.up = function (knex) {
  //? Why Promise.all. I saw promised as a 2nd parameter in
  //? the up function.
  return Promise.all([
    //? what is .raw?
    knex.raw('create extension if not exists "uuid-ossp"'),
    knex.schema.createTable(tableName, (table) => {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("email").unique().notNullable();
      table.string("phoneNumber");
      table.string("firstName");
      table.string("lastName");
      table.string("role");
      table.dateTime("createdAt").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
      table.dateTime("updatedAt").defaultTo(knex.raw(`CURRENT_TIMESTAMP`));
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([knex.schema.dropTable(tableName)]);
};
