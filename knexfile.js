
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galv_books'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
};
