const newsList = [
  {
    source: "BBC",
    category: "india",
    url: "https://www.bbc.com/news/world/asia/india",
    titleSelector: "div.gs-c-promo--stacked\\@xxl div h3",
    summarySelector: "div.gs-c-promo--stacked\\@xxl div p",
    bannerSelector: "div.gs-c-promo--stacked\\@xxl div img",
    linkSelector: "div.gs-c-promo--stacked\\@xxl div a",
  },
  {
    source: "BBC",
    category: "world",
    url: "https://www.bbc.com/news/world",
    titleSelector: "div.gs-c-promo--stacked\\@xxl div h3",
    summarySelector: "div.gs-c-promo--stacked\\@xxl div p",
    bannerSelector: "div.gs-c-promo--stacked\\@xxl div img",
    linkSelector: "div.gs-c-promo--stacked\\@xxl div a",
  },
  {
    source: "BBC",
    category: "technology",
    url: "https://www.bbc.com/news/technology",
    titleSelector: "div.gs-c-promo--stacked\\@xxl div h3",
    summarySelector: "div.gs-c-promo--stacked\\@xxl div p",
    bannerSelector: "div.gs-c-promo--stacked\\@xxl div img",
    linkSelector: "div.gs-c-promo--stacked\\@xxl div a",
  },
  {
    source: "BBC",
    category: "sport",
    url: "https://www.bbc.com/sport",
    titleSelector: ".ssrcss-5ahces-Grid > li:nth-child(1) span span",
    summarySelector:
      ".ssrcss-5ahces-Grid > li:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p",
    bannerSelector: ".ssrcss-5ahces-Grid > li:nth-child(1) img",
    linkSelector:
      ".ssrcss-5ahces-Grid > li:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a",
  },
  {
    source: "BBC",
    category: "entertainment",
    url: "https://www.bbc.com/news/entertainment_and_arts",
    titleSelector: "div.gs-c-promo--stacked\\@xxl div h3",
    summarySelector: "div.gs-c-promo--stacked\\@xxl div p",
    bannerSelector: "div.gs-c-promo--stacked\\@xxl div img",
    linkSelector: "div.gs-c-promo--stacked\\@xxl div a",
  },
  {
    source: "CNN",
    category: "india",
    url: "https://edition.cnn.com/world/india",
    titleSelector:
      "div.container_lead-plus-headlines-with-images__item:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span",
    summarySelector: "",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img",
    linkSelector:
      "div.container_lead-plus-headlines-with-images__item:nth-child(1) > a:nth-child(1)",
  },
  {
    source: "CNN",
    category: "world",
    url: "https://edition.cnn.com/world",
    titleSelector:
      ".layout--wide-left-balanced-2 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span",
    summarySelector: "",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
    linkSelector:
      ".layout--wide-left-balanced-2 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)",
  },
  {
    source: "CNN",
    category: "technology",
    url: "https://edition.cnn.com/business/tech",
    titleSelector:
      "div.container_lead-plus-headlines-with-images__item:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
    linkSelector:
      "div.container_lead-plus-headlines-with-images__item:nth-child(1) > a:nth-child(2)",
  },
  {
    source: "CNN",
    category: "sport",
    url: "https://edition.cnn.com/sport",
    titleSelector:
      "div.stack__items:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
    linkSelector:
      "div.stack__items:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)",
  },
  {
    source: "CNN",
    category: "entertainment",
    url: "https://edition.cnn.com/entertainment",
    titleSelector:
      "div.container_lead-plus-headlines-with-images__item:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
    linkSelector:
      "div.container_lead-plus-headlines-with-images__item:nth-child(1) > a:nth-child(2)",
  },
  {
    source: "ZeeNews",
    category: "india",
    url: "https://zeenews.india.com/india",
    titleSelector:
      "div.desc-title:nth-child(3) > a:nth-child(2) > h2:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.container:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector: "div.desc-title:nth-child(3) > a:nth-child(2)",
  },
  {
    source: "ZeeNews",
    category: "world",
    url: "https://zeenews.india.com/world",
    titleSelector:
      "div.desc-title:nth-child(3) > a:nth-child(2) > h2:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.container:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector: "div.desc-title:nth-child(3) > a:nth-child(2)",
  },
  {
    source: "ZeeNews",
    category: "technology",
    url: "https://zeenews.india.com/technology",
    titleSelector:
      "div.desc-title:nth-child(3) > a:nth-child(2) > h2:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.container:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector: "div.desc-title:nth-child(3) > a:nth-child(2)",
  },
  {
    source: "ZeeNews",
    category: "sport",
    url: "https://zeenews.india.com/sports",
    titleSelector:
      "div.desc-title:nth-child(3) > a:nth-child(2) > h2:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.container:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector: "div.desc-title:nth-child(3) > a:nth-child(2)",
  },
  {
    source: "ZeeNews",
    category: "entertainment",
    url: "https://zeenews.india.com/entertainment",
    titleSelector:
      "div.desc-title:nth-child(3) > a:nth-child(2) > h2:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.container:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector: "div.desc-title:nth-child(3) > a:nth-child(2)",
  },
  {
    source: "IndianExpress",
    category: "technology",
    url: "https://indianexpress.com/section/technology/",
    titleSelector: ".lg-txt > a:nth-child(1)",
    summarySelector: "",
    bannerSelector: ".lead-imgbox > a:nth-child(1) > img:nth-child(1)",
    linkSelector: ".lg-txt > a:nth-child(1)",
  },
  {
    source: "IndianExpress",
    category: "sport",
    url: "https://indianexpress.com/section/sports/",
    titleSelector: "a span.hero_heading",
    summarySelector: "",
    bannerSelector: ".hero_image > a:nth-child(1) > img:nth-child(1)",
    linkSelector: ".hero_highlight > a:nth-child(1)",
  },

  {
    source: "IndianExpress",
    category: "entertainment",
    url: "https://indianexpress.com/section/entertainment/",
    titleSelector: ".background > h2:nth-child(1) > a:nth-child(1)",
    summarySelector: "",
    bannerSelector: ".picture > a:nth-child(1) > img:nth-child(1)",
    linkSelector: ".background > h2:nth-child(1) > a:nth-child(1)",
  },
  {
    source: "NDTV",
    category: "india",
    url: "https://www.ndtv.com/india",
    titleSelector:
      "div.news_Itm:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)",
    summarySelector:
      "div.news_Itm:nth-child(1) > div:nth-child(2) > p:nth-child(3)",
    bannerSelector:
      "div.news_Itm:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector:
      "div.news_Itm:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)",
  },
  {
    source: "NDTV",
    category: "world",
    url: "https://www.ndtv.com/world-news",
    titleSelector:
      "div.news_Itm:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)",
    summarySelector:
      "div.news_Itm:nth-child(1) > div:nth-child(2) > p:nth-child(3)",
    bannerSelector:
      "div.news_Itm:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector: "div.news_Itm:nth-child(1) > div:nth-child(1) > a",
  },
  {
    source: "NDTV",
    category: "entertainment",
    url: "https://www.ndtv.com/entertainment",
    titleSelector: ".col2",
    summarySelector: "",
    bannerSelector: ".imgbx > a:nth-child(1) > img:nth-child(1)",
    linkSelector: ".imgbx > a",
  },
  {
    source: "HindustanTimes",
    category: "india",
    url: "https://www.hindustantimes.com/india-news",
    titleSelector:
      "div.cartHolder:nth-child(2) > h3:nth-child(1) > a:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.cartHolder:nth-child(2) > figure:nth-child(4) > span:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector:
      "div.cartHolder:nth-child(2) > h3:nth-child(1) > a:nth-child(1)",
  },
  {
    source: "HindustanTimes",
    category: "world",
    url: "https://www.hindustantimes.com/world-news",
    titleSelector:
      "div.cartHolder:nth-child(2) > h3:nth-child(1) > a:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.cartHolder:nth-child(2) > figure:nth-child(4) > span:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector:
      "div.cartHolder:nth-child(2) > h3:nth-child(1) > a:nth-child(1)",
  },
  {
    source: "HindustanTimesTech",
    category: "technology",
    url: "https://tech.hindustantimes.com/",
    titleSelector: "div h1.heading",
    summarySelector: "",
    bannerSelector: ".firstArticle > div:nth-child(1) > img:nth-child(1)",
    linkSelector: "div .firstArticle",
  },
  {
    source: "HindustanTimes",
    category: "sport",
    url: "https://www.hindustantimes.com/sports",
    titleSelector:
      "div.cartHolder:nth-child(4) > h3:nth-child(1) > a:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.cartHolder:nth-child(4) > figure:nth-child(4) > span:nth-child(1) > a:nth-child(1) > img",
    linkSelector:
      "div.cartHolder:nth-child(4) > h3:nth-child(1) > a:nth-child(1)",
  },
  {
    source: "HindustanTimes",
    category: "entertainment",
    url: "https://www.hindustantimes.com/entertainment",
    titleSelector:
      "div.cartHolder:nth-child(2) > h3:nth-child(1) > a:nth-child(1)",
    summarySelector: "",
    bannerSelector:
      "div.cartHolder:nth-child(2) > figure:nth-child(4) > span:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
    linkSelector:
      "div.cartHolder:nth-child(2) > h3:nth-child(1) > a:nth-child(1)",
  },
];

export default newsList;
