// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'bloggr_dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  aws: {
    client:'pg',
    connection:{
      database:process.env.DB_NAME,
      host:process.env.DB_HOST,
      port:process.env.DB_PORT,
      user:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
