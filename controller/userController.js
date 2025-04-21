const userService = require('../application/userApplication');

const getUsers = async (req, res) => {
    try {
        const users = await userService.listUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email, senha } = req.body;
        const newUser = await userService.addUser(username, email, senha);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};


const updateUser = async (req, res) => {
    try {
        const { id, username, email, senha } = req.body;
        const result = await userService.editUser(id, username, email, senha);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ error: "erro ao atualizar cadastro" });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await userService.deleteUser(id);
        res.status(201);
    }
    catch (error) {
        res.status(500).json({ error: "erro ao remover usuario" });
        console.log(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.query.id

        const result = await userService.getUserById(id);
        res.status(200).json(result);
    }
    catch (error) {
        return error;
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
};
