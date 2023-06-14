import express from "express";
import News from "../models/news.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const news = await News.find({});
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

router.get("/india", async (req, res) => {
  try {
    const news = await News.find({ category: "india" });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

router.get("/world", async (req, res) => {
  try {
    const news = await News.find({ category: "world" });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

router.get("/sport", async (req, res) => {
  try {
    const news = await News.find({ category: "sport" });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

router.get("/technology", async (req, res) => {
  try {
    const news = await News.find({ category: "technology" });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

router.get("/entertainment", async (req, res) => {
  try {
    const news = await News.find({ category: "entertainment" });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

export default router;
