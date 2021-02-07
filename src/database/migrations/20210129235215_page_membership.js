exports.up = function (knex) {
  return Promise.all([
    knex.raw('create extension if not exists "uuid-ossp"'),
    knex.schema.createTable("page_membership", (table) => {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table
        .uuid("userId")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.uuid("pageId").references("id").inTable("page").onDelete("CASCADE");
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([knex.schema.dropTable("page_membership")]);
};
