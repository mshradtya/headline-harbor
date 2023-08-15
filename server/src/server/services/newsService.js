const User = require("../models/User");
const News = require("../models/News");
const axios = require("axios");
const cheerio = require("cheerio");
const newsData = require("../utils/newsData");

async function scrapeNews(news) {
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

const scrapeLatestNews = async () => {
  await News.deleteMany();
  console.log("scraping...");
  await Promise.all(newsData.map(scrapeNews));
  return { message: "scraped latest news" };
};

const readAllNews = async () => {
  const news = News.find({});
  return news;
};

const readIndiaNews = async () => {
  const news = News.find({ category: "india" });
  return news;
};

const readWorldNews = async () => {
  const news = News.find({ category: "world" });
  return news;
};

const readSportsNews = async () => {
  const news = News.find({ category: "sport" });
  return news;
};

const readTechnologyNews = async () => {
  const news = News.find({ category: "technology" });
  return news;
};

const readEntertainmentNews = async () => {
  const news = News.find({ category: "entertainment" });
  return news;
};

module.exports = {
  scrapeLatestNews,
  readAllNews,
  readIndiaNews,
  readWorldNews,
  readSportsNews,
  readTechnologyNews,
  readEntertainmentNews,
};
