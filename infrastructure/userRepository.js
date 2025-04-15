const pool = require('../config');

const getAllUsers = async () => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        return result.rows;
    }
    catch (err) {
        return err
    }
};

module.exports = {
    getAllUsers,
};
