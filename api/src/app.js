const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false , limit: "50mb"}));
app.use(cors());

app.use("/", routes);

module.exports = app;
