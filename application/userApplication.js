const userRepo = require('../infrastructure/userRepository');

const listUsers = () => userRepo.getAllUsers();

const addUser = (username, email, senha) => userRepo.insertUser(username, email, senha)

const editUser = (userID, username, email, senha) => userRepo.updateUser(userID, username, email, senha);

const deleteUser = (userID) => userRepo.deleteUser(userID);

const getUserById = (userID) => userRepo.getUserById(userID);

const ValidateUser = (username, email) => userRepo.ValidateUser(username, email);

module.exports = {
    listUsers,
    addUser,
    editUser,
    deleteUser,
    getUserById,
    ValidateUser
};
