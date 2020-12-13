exports.up = function (knex) {
  return knex.schema.createTable("character", (table) => {
    table.string("id").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("character");
};
