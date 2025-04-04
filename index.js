const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require(`cors`)

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors);

// Integrando as rotas de usuário
app.use('/api/users', userRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
