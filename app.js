// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const cors = require("cors");
const expressMongoSanitize = require("express-mongo-sanitize");
const expressRateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const validator = require("validator");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(multer().none());
app.use(cors());
app.use(expressMongoSanitize());
app.use(expressRateLimit({ max: 100, windowMs: 60 * 60 * 1000 }));
app.use(helmet());
app.use(hpp());
app.use(validator());

// Undefined route
app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

module.exports = app;
