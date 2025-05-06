const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const lojaRoutes = require('./routes/lojasRoutes');
const carrosRoutes = require('./routes/CarrosRoutes')

app.use('/users', userRoutes);
app.use('/lojas', lojaRoutes);
app.use('/carros', carrosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
