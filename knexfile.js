
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galv_books'
  },
  production: {
    client: 'postgresql',
    connection: {
      user: process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database:process.env.DB,
      host:process.env.DB_HOST,
      port:process.env.DB_PORT
    }
  }
};
