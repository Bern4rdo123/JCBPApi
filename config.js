// bern4rdo123/jcbpapi/JCBPApi-f9b0117d7d902aa8b631a63e265f18ffdb53c176/config.js

const { Pool } = require('pg');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const connectionOptions = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
};

const pool = new Pool(connectionOptions);

module.exports = pool;