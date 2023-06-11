import express from "express";
import morgan from "morgan";
import "dotenv/config";

import newsRouter from "./routes/news.js";

const app = express();
const PORT = 3000;
const API = process.env.API_URL;

app.use(morgan("tiny"));
app.use(express.json());

// routes
app.use(`${API}/news`, newsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
