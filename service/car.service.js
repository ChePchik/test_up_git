const jsonfile = require("jsonfile");

const getCarDB = () => {
	let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
		if (err) {
			console.error(err);
			throw err;
		}
	});
	return data;
};
const getCarOneDB = (id) => {
	let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
		if (err) {
			console.error(0, err);
			throw err;
		}
	});
	if (!id) throw "Нет нужного параметра";
	return data[id];
};

const postCarDB = (obj) => {
	let data = jsonfile.readFileSync("./models/car.json", (error, file) => {
		if (error) {
			console.error(1, error);
			throw "1";
		}
	});
	let arr = [...data];
	arr.push(obj);
	// console.log(1, arr);

	jsonfile.writeFileSync("./models/car.json", arr, (error) => {
		if (error) {
			console.error(2, error);
			throw "2";
		}
	});

	return obj;
};

const updateCarDB = (id, name, model, years, price) => {
	let data = jsonfile.readFileSync("./models/car.json", (error, file) => {
		if (error) {
			console.error(1, error);
			throw "1";
		}
	});

	let result = data[id];

	result.name = name;
	result.model = model;
	result.years = years;
	result.price = price;

	return result;
};

module.exports = { getCarDB, getCarOneDB, postCarDB, updateCarDB };
