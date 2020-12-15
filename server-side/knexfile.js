module.exports = {
  /**?
   * Configuraçẽos do do banco Utilizado para desenvolvimento SQlite
   */
  /*   development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  }, */
  /**?
   * Configuraçẽos do do banco Utilizado para desenvolvimento PostgreSQL
   */
  development: {
    client: "pg",
    connection: {
      database: "best_hero",
      host: "localhost",
      user: "postgres",
      password: "07c09a97c#",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },

  /**?
   * Configuraçẽos do do banco Utilizado para desenvolvimento em grupo time de desenvolvimento
   */
  staging: {
    client: "postgresql",
    connection: {
      database: "db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  /**?
   * Configuraçẽos do do banco Utilizado para para implementação da aplicação
   */

 /*  production: {
    client: "postgresql",
    connection: {
      database: DATABASE_NAME,
      host: DATABASE_URL,
      user: DATABASE_USER,
      password: KEY_DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  }, */
};
