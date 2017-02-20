module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galv_books'
  },
  production: {
    client: 'postgresql',
    connection: {
      client: 'pg',
      connection: process.env.DATABASE_URL || 'postgres://localhost/library
    }
  }
};
