const { Router } = require("express");
const { getCar, postCar, updateCar, deleteCar, getCarOne } = require("../controllers/car.controller");
const router = Router();

router.route("/").get(getCar).post(postCar);
router.route("/:id").get(getCarOne).put(updateCar).delete(deleteCar);

module.exports = router;
