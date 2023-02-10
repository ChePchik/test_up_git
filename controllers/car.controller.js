const { getCarDB, getCarOneDB, postCarDB, updateCarDB } = require("../service/car.service");

const getCar = (req, res) => {
	const data = getCarDB();
	res.status(200).json(data);
};

const getCarOne = (req, res) => {
	const id = req.params.id;
	const data = getCarOneDB(id);
	res.status(200).json(data);
};

const postCar = (req, res) => {
	const { name, model, years, price } = req.body;
	// деструкторизация переменных -> извлечение

	let dataCar = {
		name, //name:name если имена полей и переменных одинаковы, то сохращённая запись
		model,
		years,
		price,
	};
	try {
		const ress = postCarDB(dataCar);
		if (!ress) res.status(400).json("Ошибка создания");
		res.status(200).json(res);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};
const updateCar = (req, res) => {
	const id = req.params.id;
	const { name, model, years, price } = req.body;
	// деструкторизация переменных -> извлечение

	let result = updateCarDB(id, name, model, years, price);

	res.status(200).json(result);
};

const deleteCar = (req, res) => {
	res.status(200).json("удалили машину");
};

module.exports = {
	getCar,
	postCar,
	updateCar,
	deleteCar,
	getCarOne,
};
