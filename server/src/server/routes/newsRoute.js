const express = require("express");
const router = express.Router();
const {
  readAllNews,
  readIndiaNews,
  readWorldNews,
  readSportsNews,
  readTechnologyNews,
  readEntertainmentNews,
  scrapeLatestNews,
} = require("../controllers/newsController");
const { authUser } = require("../controllers/authController");

router.post("/news/scrape", scrapeLatestNews);
router.get("/news/", readAllNews);
router.get("/news/india", readIndiaNews);
router.get("/news/world", readWorldNews);
router.get("/news/sport", readSportsNews);
router.get("/news/tech", readTechnologyNews);
router.get("/news/entertainment", readEntertainmentNews);

module.exports = router;
