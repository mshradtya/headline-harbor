import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json("hi");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

export default router;
