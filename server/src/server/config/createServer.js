const express = require("express");
var cors = require("cors");
const news = require("../routes/newsRoute");
const users = require("../routes/usersRoute");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

function createServer() {
  const app = express();
  const API = process.env.API_URL;
  const allowedOrigins = [
    "http://localhost:5173",
    "https://newshub-klebca.netlify.app/",
  ];
  const corsOptions = {
    // origin: process.env.ORIGIN,
    origin: allowedOrigins,
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(cookieParser());
  app.use(morgan("tiny"));
  app.use(function (err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
      res
        .status(400)
        .json(
          "The server did not receive a valid JSON. Please try checking for syntax errors."
        );
    }
  });
  app.use(`${API}`, users);
  app.use(`${API}`, news);
  return app;
}

module.exports = createServer;
