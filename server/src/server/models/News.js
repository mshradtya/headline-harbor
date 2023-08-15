const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  source: String,
  category: String,
  title: String,
  summary: String,
  banner: String,
  link: String,
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
