const { insertLoja, removeLoja, getLojasByUserId } = require("../infrastructure/lojasRepository");

const InsertLoja = async (req, res) => {
    const { nome, contato, cidade, usuario_id } = req.body;

    try {
        const users = await insertLoja(nome, cidade, contato, usuario_id)
        res.status(200).json({ message: 'sucessful', result: users });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error });
    }
}

const deleteLoja = async (req, res) => {
    const { id } = req.query;
    try {
        const users = await removeLoja(id)
        res.status(200).json({ message: 'sucessful', result: users });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error });
    }
}

const getLojas = async (req, res) => {
    try {
        const lojas = await getLojas();
        res.status(200).json({ message: 'sucessful', result: lojas })
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar lojas", error: error })
    }
}

const getLojasById = async (req, res) => {
    try {
        const { id } = req.query;

        console.log(id)

        const lojas = await getLojasByUserId(id);
        res.status(200).json({ message: 'sucessful', result: lojas })
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar lojas com esse ID", error: error })
    }
}

module.exports = { InsertLoja, getLojas, deleteLoja, getLojasById }