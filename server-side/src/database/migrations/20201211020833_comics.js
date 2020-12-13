exports.up = function (knex) {
  return knex.schema.createTable("comics", (table) => {
    table.string("id").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comics");
};
