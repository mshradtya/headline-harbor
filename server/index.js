import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import axios from "axios";
import cheerio from "cheerio";
import cors from "cors";
import "dotenv/config";

import newsRouter from "./routes/news.js";
import newsList from "./data/newsList.js";
import News from "./models/news.js";

const app = express();
const PORT = 3000;
const API = process.env.API_URL;

// middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

// routes
app.use(`${API}/news`, newsRouter);

// connect to the database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    dbName: "newsdb",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
    scrapeNews();
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

// scrape latest news
async function scrapeNews() {
  try {
    await News.deleteMany();
    await Promise.all(newsList.map(fetchNews));
    console.log("Scraped latest news");
  } catch (error) {
    console.error("Failed to scrape news:", error);
  }
}

async function fetchNews(news) {
  try {
    const response = await axios.get(news.url, {
      timeout: 50000,
    });
    const html = response.data;
    const $ = cheerio.load(html);
    const source = news.source;
    const category = news.category;
    const title = $(news.titleSelector).text().trim();
    const summary = $(news.summarySelector).text().trim();

    // some sites don't have absolute url for article link
    const domains = {
      BBC: "https://www.bbc.com",
      ZeeNews: "https://zeenews.india.com",
      CNN: "https://edition.cnn.com",
      HindustanTimes: "https://www.hindustantimes.com",
      HindustanTimesTech: "https://tech.hindustantimes.com",
    };

    let link = "";
    news.source in domains
      ? (link = domains[news.source] + $(news.linkSelector).attr("href"))
      : (link = $(news.linkSelector).attr("href"));

    // zeenews uses lazy loading
    let banner = "";
    news.source === "ZeeNews"
      ? (banner = $(news.bannerSelector).attr("data-src"))
      : (banner = $(news.bannerSelector).attr("src"));

    const newsModel = new News({
      source,
      category,
      title,
      summary,
      banner,
      link,
    });

    await newsModel.save();
  } catch (error) {
    console.error("Failed to save news:", error);
  }
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
