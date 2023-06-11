import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const newsSites = [
      {
        name: "BBC",
        url: "https://www.bbc.com",
        category: "international",
        selectors: {
          title: "a[rev='hero1|headline']",
          summary:
            "div[data-bbc-container='hero'] div.media__content p.media__summary",
          banner: "li.media-list__item--1 div.media.media--hero img",
          link: "a[rev='hero1|headline']",
        },
      },
      {
        name: "NYTimes",
        url: "https://www.nytimes.com ",
        category: "international",
        selectors: {
          title: "h3.indicate-hover.css-vf1hbp",
          summary: "p.summary-class.css-dcsqcp",
          banner: "div.css-1xnvcaz img",
          link: "a.css-9mylee",
        },
      },
      {
        name: "CNN",
        url: "https://edition.cnn.com/",
        category: "international",
        selectors: {
          title: "h2.container_lead-package__title_url-text",
          summary:
            "div.container_lead-package__cards-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) span[data-editable='headline']",
          banner:
            "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
          link: "a.container__title-url.container_lead-package__title-url",
        },
      },
      {
        name: "ZeeNews",
        category: "national",
        url: "https://zeenews.india.com/",
        selectors: {
          title: "div.lead-story-title > div:nth-child(2) a",
          summary: "",
          banner: "div.top-story-desktop div a img",
          link: "div.top-story-desktop div a",
        },
      },
      {
        name: "IndianExpress",
        category: "national",
        url: "https://indianexpress.com/",
        selectors: {
          title: "h2.content_wall a",
          summary: "div[data-vr-zone='Lead Story'] p a",
          banner: "div[data-vr-zone='Lead Story'] div.lead-img a img",
          link: "h2.content_wall a",
        },
      },
    ];

    const results = await Promise.all(newsSites.map(fetchNews));

    res.json(results);
    console.log(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

async function fetchNews(newsSite) {
  const response = await axios.get(newsSite.url);
  const html = response.data;
  const $ = cheerio.load(html);
  const title = $(newsSite.selectors.title).text().trim();
  const summary = $(newsSite.selectors.summary).text().trim();
  const banner = $(newsSite.selectors.banner).attr("src");
  const link = $(newsSite.selectors.link).attr("href");

  return {
    name: newsSite.name,
    title,
    summary,
    banner,
    link,
  };
}

export default router;
