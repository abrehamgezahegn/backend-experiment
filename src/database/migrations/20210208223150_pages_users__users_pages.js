exports.up = function (knex) {
  return Promise.all([
    knex.raw('create extension if not exists "uuid-ossp"'),
    knex.schema.createTable("pages_users__users_pages", (table) => {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table
        .uuid("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table
        .uuid("page_id")
        .references("id")
        .inTable("page")
        .onDelete("CASCADE");
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([knex.schema.dropTable("pages_users__users_pages")]);
};
