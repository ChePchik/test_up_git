const { getCarDB, getCarOneDB } = require("../service/car.service");

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
  console.log(req);
  res.status(200).json("создали новую машину");
};
const updateCar = (req, res) => {
  res.status(200).json("обновили машину");
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
