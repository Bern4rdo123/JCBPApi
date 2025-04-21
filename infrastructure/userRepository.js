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

const insertUser = async (username, email, senha) => {
    try {
        const result = await pool.query(`INSERT INTO usuarios (username, email, senha) values ($1, $2, $3)`, [username, email, senha]);
        return 200;
    } catch (error) {
        return error;
    }
}

const updateUser = async (userID, username, email, senha) => {
    try {
        const result = await pool.query(`UPDATE usuarios SET username=$2, email=$3, senha=$4 WHERE id=$1`, [userID, username, email, senha]);
        return result;
    } catch (error) {
        return error;
    }
}

const deleteUser = async (userID) => {
    try {
        const result = await pool.query(`DELETE from usuarios where id = $1`, [userID]);
        return result;
    }
    catch (error) {
        return error;
    }
}

const getUserById = async (userID) => {
    try {
        const result = await pool.query(`SELECT * FROM usuarios WHERE id=$1`, [userID]);
        if (result.rowCount == 0)
            throw "não foram encontrados com esse id";
        else
            return result.rows;
    } catch (error) {
        return error;
    }
}


module.exports = {
    getAllUsers,
    insertUser,
    updateUser,
    deleteUser,
    getUserById
};
