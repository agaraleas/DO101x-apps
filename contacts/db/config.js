require('dotenv').config();
const DB_NAME = process.env.DB_NAME || 'contacts';
const DB_USER = process.env.DB_USER || 'contacts';
const DB_PASSWORD = process.env.DB_PASSWORD || 'contacts';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '5432';
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://' + DB_USER + ':' + DB_PASSWORD + '@' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME;
const { Pool } = require('pg');

console.log("Connection string: " + DB_CONFIG);

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});

module.exports = { pgconn }