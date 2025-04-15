const userRepo = require('../infrastructure/userRepository');

const listUsers = () => userRepo.getAllUsers();

module.exports = {
    listUsers,
};
