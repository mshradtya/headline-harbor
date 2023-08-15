const newsService = require("../services/newsService");

const scrapeLatestNews = async (req, res) => {
  try {
    const { message } = await newsService.scrapeLatestNews();
    return res.status(200).json({ status: 200, success: true, message });
  } catch (err) {
    return res
      .status(500)
      .json({ status: 400, success: false, message: err.message });
  }
};

const readAllNews = async (req, res) => {
  try {
    const news = await newsService.readAllNews();
    return res.status(200).json({ status: 200, success: true, news });
  } catch (err) {
    return res
      .status(500)
      .json({ status: 400, success: false, message: err.message });
  }
};

const readIndiaNews = async (req, res) => {
  try {
    const news = await newsService.readIndiaNews();
    return res.status(200).json({ status: 200, success: true, news });
  } catch (err) {
    return res
      .status(500)
      .json({ status: 400, success: false, message: err.message });
  }
};

const readWorldNews = async (req, res) => {
  try {
    const news = await newsService.readWorldNews();
    return res.status(200).json({ status: 200, success: true, news });
  } catch (err) {
    return res
      .status(500)
      .json({ status: 400, success: false, message: err.message });
  }
};

const readSportsNews = async (req, res) => {
  try {
    const news = await newsService.readSportsNews();
    return res.status(200).json({ status: 200, success: true, news });
  } catch (err) {
    return res
      .status(500)
      .json({ status: 400, success: false, message: err.message });
  }
};

const readTechnologyNews = async (req, res) => {
  try {
    const news = await newsService.readTechnologyNews();
    return res.status(200).json({ status: 200, success: true, news });
  } catch (err) {
    return res
      .status(500)
      .json({ status: 400, success: false, message: err.message });
  }
};

const readEntertainmentNews = async (req, res) => {
  try {
    const news = await newsService.readEntertainmentNews();
    return res.status(200).json({ status: 200, success: true, news });
  } catch (err) {
    return res
      .status(500)
      .json({ status: 400, success: false, message: err.message });
  }
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
