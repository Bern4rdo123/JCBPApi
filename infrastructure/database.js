let users = []; // Array simulado de usuários

exports.getUsers = () => users;

exports.getUserById = (id) => users.find(user => user.id === id);

exports.createUser = (userData) => {
    const newUser = { id: users.length + 1, ...userData };
    users.push(newUser);
    return newUser;
};

exports.updateUser = (id, userData) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users[index] = { id: parseInt(id), ...userData };
        return users[index];
    }
    return null;
};

exports.deleteUser = (id) => {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};
