import pg from 'pg';

let config = {
  user: 'postgres', //postgres Role
  database: 'postgres', //postgres database
  password: 'hberg308', //postgres password for given role
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //postgres server port
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000
}

const pool = new pg.Pool(config);

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack);
});

let connection = {
  query: (text, callback) => {
    return pool.query(text, callback);
  }
};

export default connection;