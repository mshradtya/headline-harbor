import { useEffect, useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";
import BookmarkCard from "../components/BookmarkCard";

interface News {
  _id: string;
  banner: string;
  category: string;
  link: string;
  source: string;
  summary: string;
  title: string;
}

const Bookmarks = () => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [news, setNews] = useState<News[]>([]);
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosPrivate.get(`/user/bookmarks/${auth._id}`);
        const newsData = await response.data.bookmarks;
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
          <Box key={newsItem.link}>
            <BookmarkCard news={newsItem} />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Bookmarks;
