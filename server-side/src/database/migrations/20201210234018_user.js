exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.datetime("birthday").notNullable();
    table.string("phone").notNullable();
    table.string("bestHero").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("update_at").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user")
};
