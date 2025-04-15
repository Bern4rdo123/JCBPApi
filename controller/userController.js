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
    const { name, email } = req.body;
    try {
        const newUser = await userService.addUser(name, email);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

module.exports = {
    getUsers,
    createUser
};
