const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const app = express();
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cors());

app.use("/", routes);

module.exports = app;
