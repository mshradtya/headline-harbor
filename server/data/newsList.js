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
    titleSelector: "a[rev='hero1|headline']",
    summarySelector:
      "div[data-bbc-container='hero'] div.media__content p.media__summary",
    bannerSelector: "li.media-list__item--1 div.media.media--hero img",
    linkSelector: "a[rev='hero1|headline']",
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
      "div.container_lead-plus-headlines-with-images__item:nth-child(1) span",
    summarySelector: "",
    bannerSelector:
      "div.container_lead-plus-headlines-with-images__item:nth-child(1) img",
    linkSelector: "a.container__title-url.container_lead-package__title-url",
  },
  {
    source: "CNN",
    category: "world",
    url: "https://edition.cnn.com/world",
    titleSelector: "h2.container_lead-package__title_url-text",
    summarySelector:
      "div.container_lead-package__cards-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) span[data-editable='headline']",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
    linkSelector: "a.container__title-url.container_lead-package__title-url",
  },
  {
    source: "CNN",
    category: "technology",
    url: "https://edition.cnn.com/business/tech",
    titleSelector: "h2.container_lead-package__title_url-text",
    summarySelector:
      "div.container_lead-package__cards-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) span[data-editable='headline']",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
    linkSelector: "a.container__title-url.container_lead-package__title-url",
  },
  {
    source: "CNN",
    category: "sport",
    url: "https://edition.cnn.com/sport",
    titleSelector: "h2.container_lead-package__title_url-text",
    summarySelector:
      "div.container_lead-package__cards-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) span[data-editable='headline']",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
    linkSelector: "a.container__title-url.container_lead-package__title-url",
  },
  {
    source: "CNN",
    category: "entertainment",
    url: "https://edition.cnn.com/entertainment",
    titleSelector: "h2.container_lead-package__title_url-text",
    summarySelector:
      "div.container_lead-package__cards-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) span[data-editable='headline']",
    bannerSelector:
      "div.image__container:nth-child(2) > picture:nth-child(1) > img:nth-child(4)",
    linkSelector: "a.container__title-url.container_lead-package__title-url",
  },
  {
    source: "ZeeNews",
    category: "india",
    url: "https://zeenews.india.com/",
    titleSelector: "div.lead-story-title > div:nth-child(2) a",
    summarySelector: "",
    bannerSelector: "div.top-story-desktop div a img",
    linkSelector: "div.top-story-desktop div a",
  },
  {
    source: "IndianExpress",
    category: "india",
    url: "https://indianexpress.com/",
    titleSelector: "h2.content_wall a",
    summarySelector: "div[data-vr-zone='Lead Story'] p a",
    bannerSelector: "div[data-vr-zone='Lead Story'] div.lead-img a img",
    linkSelector: "h2.content_wall a",
  },
  {
    source: "NDTV",
    category: "india",
    url: "https://www.ndtv.com/",
    titleSelector: "div.featured_desc a",
    summarySelector: "",
    bannerSelector: "div.featured_story img",
    linkSelector: "div.featured_story a",
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
];

export default newsList;
