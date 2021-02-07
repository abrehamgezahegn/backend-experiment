exports.up = function (knex) {
  return Promise.all([
    knex.raw('create extension if not exists "uuid-ossp"'),
    knex.schema.createTable("page", (table) => {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("name").notNull();
      table.integer("followerCount");
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([knex.schema.dropTable("page")]);
};
