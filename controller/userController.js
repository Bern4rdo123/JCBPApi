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

// ... outras funções ...

const ValidateUser = async (req, res) => {
    try {
        const { senha, email } = req.body;
        const result = await userService.ValidateUser(senha, email);

        if (!result) { // Se o resultado for false ou indefinido
            return res.status(404).json({ message: "Usuário ou senha inválidos" });
        }

        // Se a validação for bem-sucedida
        res.status(200).json({ message: "Login bem-sucedido", result: result });

    } catch (error) {
        // CORREÇÃO: Enviar uma resposta de erro e logar o erro no servidor
        console.error('Erro no endpoint de validação:', error);
        res.status(500).json({ error: 'Erro interno no servidor ao tentar validar usuário.' });
    }
};

// Função para gerar um token JWT
const generateToken = (user) => {
    // Obtenha a chave secreta do .env
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new Error("A chave secreta do JWT não está definida no arquivo .env");
    }

    // Crie o payload do token com as informações do usuário
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email
    };

    // Assine o token com a chave secreta e defina o tempo de expiração
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' }); // Expira em 1 hora
};

// Novo método de login para gerar o JWT
const loginUser = async (req, res) => {
    try {
        const { senha, email } = req.body;

        // Use a lógica de validação do seu `userService`
        const result = await userService.ValidateUser(senha, email);

        if (result === false || result.rowCount === 0) {
            // Se a validação falhar
            return res.status(401).json({ message: "Usuário ou senha inválidos" });
        } else {
            // Se a validação for bem-sucedida, gere o token e retorne-o
            const user = result.rows[0]; // Assume que o resultado da query retorna uma linha
            const token = generateToken(user);
            res.status(200).json({ message: "Login bem-sucedido", token: token });
        }
    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
};

// Middleware para verificar o token JWT
const verifyJwt = (req, res, next) => {
    // Obtenha o cabeçalho de autorização da requisição
    const authHeader = req.headers['authorization'];

    // Verifique se o cabeçalho existe e está no formato "Bearer <token>"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Acesso negado: Token não fornecido ou inválido' });
    }

    // Extraia o token
    const token = authHeader.split(' ')[1];

    try {
        // Verifique e decodifique o token usando a chave secreta
        const jwtSecret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, jwtSecret);

        // Adicione o payload do usuário à requisição para uso em rotas protegidas
        req.user = decoded;

        // Continue para a próxima função na rota
        next();
    } catch (error) {
        // Se a verificação falhar (token expirado, assinatura inválida, etc.)
        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ message: 'Acesso negado: Token expirado' });
        }
        return res.status(403).json({ message: 'Acesso negado: Token inválido' });
    }
};
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    loginUser, // Adicione o novo método de login
    verifyJwt,
    ValidateUser
};
