import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  source: String,
  category: String,
  title: String,
  summary: String,
  banner: String,
  link: String,
});

export default new mongoose.model("News", newsSchema);
