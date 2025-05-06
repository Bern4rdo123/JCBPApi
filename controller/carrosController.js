const CarsRepository = require("../infrastructure/CarsRepository");

const InsertCarro = async (req, res) => {
    try {
        const carro = req.body;

        const result = await CarsRepository.InsertCarro(carro);
        return res.status(200).json({ message: "sucessful", result: result })
    }
    catch (erro) {
        res.status(500).json({ error: "erro ao buscar carros" })
    }
};

const GetCarros = async (req, res) => {
    try {
        const cars = await CarsRepository.GetCars();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar carros' });
    };
}

const DeleteCarro = async (req, res) => {
    try {
        const id = req.body;

        const result = await CarsRepository.DeleteCar(id);
        return res.status(200).json({ message: "sucessful", result: result })
    }
    catch (erro) {
        res.status(500).json({ error: "erro ao buscar carros" })
    }
};

const GetCarrosById = async (req, res) => {
    try {
        const id = req.query.id;

        const result = await CarsRepository.GetCarByID(id);
        return res.status(200).json({ message: "sucessful", result: result })
    }
    catch (erro) {
        res.status(500).json({ error: "erro ao buscar carros" })
    }
}

module.exports = { DeleteCarro, GetCarrosById, GetCarros, InsertCarro }
