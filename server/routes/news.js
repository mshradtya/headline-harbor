import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const newsSites = [
      {
        name: "BBC",
        url: "https://www.bbc.com/news",
        selectors: {
          title:
            "h3.gs-c-promo-heading__title.gel-paragon-bold.nw-o-link-split__text",
          summary: "div.gs-c-promo-body:nth-child(1) div p",
          banner: "img.qa-srcset-image",
        },
      },
      {
        name: "NYTimes",
        url: "https://www.nytimes.com/international/",
        selectors: {
          title: "h3.indicate-hover.css-vf1hbp",
          summary: "p.summary-class.css-dcsqcp",
          banner: "",
        },
      },
      {
        name: "CNN",
        url: "https://edition.cnn.com/",
        selectors: {
          title: "h2.container_lead-package__title_url-text",
          summary:
            "div.container_lead-package__cards-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) span[data-editable='headline']",
          banner:
            "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
        },
      },
      {
        name: "ZeeNews",
        url: "https://zeenews.india.com/",
        selectors: {
          title: "div.lead-story-title > div:nth-child(2) a",
          summary: "",
          banner: "div.top-story-desktop div a img",
        },
      },
    ];

    const results = await Promise.all(newsSites.map(fetchNews));

    console.log(results);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

async function fetchNews(newsSite) {
  const response = await axios.get(newsSite.url);
  const html = response.data;
  const $ = cheerio.load(html);
  const title = $(newsSite.selectors.title).text();
  const summary = $(newsSite.selectors.summary).text();
  const banner = $(newsSite.selectors.banner).attr("src");

  return {
    name: newsSite.name,
    title,
    summary,
    banner,
  };
}

export default router;
