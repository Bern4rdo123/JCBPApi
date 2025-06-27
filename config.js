// bern4rdo123/jcbpapi/JCBPApi-3b4d25cf72c40d133f3b7033b4474b791015e269/config.js

const { Pool } = require('pg');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const connectionOptions = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
};

const pool = new Pool(connectionOptions);

module.exports = pool;