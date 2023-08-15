import { useEffect, useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import axios from "../api/axios";
import NewsCard from "./NewsCard";

interface News {
  _id: string;
  banner: string;
  category: string;
  link: string;
  source: string;
  summary: string;
  title: string;
}

const AllNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/news");
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
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${columns}, 1fr)`}
        gap={3}
      >
        {news.map((newsItem) => (
          <Box key={newsItem._id}>
            <NewsCard news={newsItem} />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default AllNews;
