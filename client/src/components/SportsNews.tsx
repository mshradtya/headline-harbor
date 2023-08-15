import { useEffect, useState } from "react";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NewsCard from "./NewsCard";
import axios from "../api/axios";

interface News {
  _id: string;
  banner: string;
  category: string;
  link: string;
  source: string;
  summary: string;
  title: string;
}

const SportsNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/news/sport");
        const newsData = await response.data.news;
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="AllNews">
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={3}>
        {news.map((newsItem) => (
          <GridItem key={newsItem._id}>
            <NewsCard news={newsItem} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default SportsNews;
