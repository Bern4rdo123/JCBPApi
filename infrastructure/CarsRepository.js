const pool = require("../config");

const InsertCarro = async (carro) => {
    try {
        const result = await pool.query('INSERT INTO carros (modelo, marca, ano, cor, combustivel, kilometragem, id_loja, preco) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [carro.modelo, carro.marca, carro.ano, carro.cor, carro.combustivel, carro.kilometragem, carro.id_loja, carro.preco]);
        return result.rows;
    } catch (error) {
        return error;
    }
}

const GetCarByID = async (id) => {
    try {
        const result = await pool.query(`SELECT * FROM carros WHERE id=$1`, [id]);
        return result.rows;
    } catch (error) {
        return error;
    }
}

const GetCars = async () => {
    try {
        const result = await pool.query(`SELECT carros.id, carros.modelo, carros.marca, carros.ano, carros.cor, carros.combustivel, carros.kilometragem, lojas.nome FROM carros INNER JOIN lojas ON carros.id_loja = lojas.id`);
        return result.rows
    } catch (error) {
        return error;
    }
}

const DeleteCar = async (id) => {
    try {
        const result = await pool.query(`DELETE FROM carros WHERE id=$1`, [id]);
        return result.rows
    } catch (error) {
        return error
    }
}

module.exports = { InsertCarro, GetCarByID, GetCars, DeleteCar }