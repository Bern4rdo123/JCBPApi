const pool = require("../config");

const insertLoja = async (nome, cidade, contato, userID) => {
    try {
        const result = await pool.query('INSERT INTO lojas (nome, cidade, contato, usuario_id) values ($1, $2,$3,$4)', [nome, cidade, contato, userID]);
        return result.rows;
    }
    catch (err) {
        return err
    }
}

const removeLoja = async (LojaID) => {
    try {
        const result = await pool.query('DELETE FROM lojas WHERE id=$1', [LojaID]);
        return result.rows;
    } catch (error) {
        return error
    }
}

const getLojas = async () => {
    try {
        const result = await pool.query(
            `SELECT L.id, L.nome,L.cidade, contato, U.username  FROM lojas L INNER JOIN 
                usuarios U ON U.id = L.usuario_id `
        );
        return result.rows;
    } catch (error) {
        return error
    }
}

const getLojasByUserId = async (id) => {
    try {
        const result = await pool.query(
            `SELECT L.id, L.nome,L.cidade, contato, U.username  FROM lojas L INNER JOIN 
                usuarios U ON U.id = L.usuario_id 
                WHERE U.id=$1
                `, [id]
        );
        return result.rows;
    } catch (error) {
        return error
    }
}
module.exports = { insertLoja, getLojas, removeLoja, getLojasByUserId }