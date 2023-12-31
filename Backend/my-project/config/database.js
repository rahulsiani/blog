module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'demo'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'password'),
      // ssl: {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      // },
    },
    // debug: false,
  },
});