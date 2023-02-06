require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const routerCar = require("./routes/car.route");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3003;

app.use(express.json());
// Работа с форматом json
app.use(express.urlencoded({ extended: true }));
// что бы мы могли передавать параметры в строке
app.use(express.static("public"));
// подключаем статичные файлы
app.use((err, request, response, next) => {
  // middleware - промежуточный обработчик
  console.log(err);
  response.status(500).send("server crash");
  next();
});
app.use("/api/car", routerCar);

// app.use("/", (req, res) => {
//   res.status(200).json("Hello word ваш сервер работает");
// });

server.listen(port, () => {
  // говорим серверу отслеживать порт и запускаем сервер
  console.log(`Server running on port http://localhost:${port}`);
});

module.exports = app;
