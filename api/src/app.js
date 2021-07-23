const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const app = express();
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", routes);

module.exports = app;
