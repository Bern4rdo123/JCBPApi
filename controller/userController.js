const db = require('../infrastructure/database');

// Obtém todos os usuários
exports.getAllUsers = (req, res) => {
    const users = db.getUsers(); // Supondo que `getUsers` retorna uma lista de usuários
    res.json(users);
};

// Obtém um usuário por ID
exports.getUserById = (req, res) => {
    const user = db.getUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
};

// Cria um novo usuário
exports.createUser = (req, res) => {
    const newUser = db.createUser(req.body);
    res.status(201).json(newUser);
};

// Atualiza um usuário existente
exports.updateUser = (req, res) => {
    const updatedUser = db.updateUser(req.params.id, req.body);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
};

// Deleta um usuário
exports.deleteUser = (req, res) => {
    const success = db.deleteUser(req.params.id);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).send('Usuário não encontrado');
    }
};
