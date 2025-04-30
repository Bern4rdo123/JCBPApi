const { insertLoja, removeLoja } = require("../infrastructure/lojasRepository");

const InsertLoja = async (req, res) => {
    const { nome, contato, cidade, usuario_id } = req.body;

    try {
        const users = await insertLoja(nome, cidade, contato, usuario_id)
        res.status(200).json({ message: 'sucessful', result: users });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error });
    }
}

const deleteLoja = async () => {
    const { id } = req.query.id;
    try {
        const users = await removeLoja(id)
        res.status(200).json({ message: 'sucessful', result: users });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error });
    }
}

const getLojas = async () => {
    try {
        const lojas = await getLojas();
        res.status(200).json({ message: 'sucessful', result: lojas })
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar lojas", error: error })
    }
}

const getLojasById = async () => {
    try {
        const { id } = req.query.id;
        const lojas = await getLojasById(id);
        res.status(200).json({ message: 'sucessful', result: lojas })
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar lojas", error: error })
    }
}

module.exports = { InsertLoja, getLojas, deleteLoja, getLojasById }