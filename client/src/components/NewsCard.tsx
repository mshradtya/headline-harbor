import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Flex,
  Spacer,
  Button,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

interface News {
  banner: string;
  source: string;
  category: string;
  title: string;
  summary: string;
  link: string;
}

const NewsCard = ({ news }: { news: News }) => {
  const { auth } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const handleBookmarkClick = async () => {
    try {
      const { banner, source, category, title, summary, link } = news;
      const _id = auth._id;
      const data = { _id, banner, source, category, title, summary, link };

      const response = await axiosPrivate.post("/user/bookmark", data);

      if (response.status === 200) setIsBookmarked(true); // Update the bookmark status on success
    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };

  return (
    <div className="NewsCard">
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={news.banner}
            objectFit="cover"
            objectPosition="center"
            h="100%"
            w="100%"
          />
        </Box>
        <Stack textAlign={"left"}>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
            mt={"5"}
          >
            {`${news.source} ${news.category}`}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {news.title}
          </Heading>
          <Text color={"gray.500"}>{news.summary}</Text>
          <Flex justify={"center"} align={"center"} mt={6} fontSize={"sm"}>
            <IconButton
              aria-label="Bookmark"
              icon={<BsFillBookmarkFill />}
              onClick={handleBookmarkClick} // Call the click handler
              color={isBookmarked ? "green.500" : "gray.500"} // Change the color based on bookmark status
            />
            <Spacer />
            <Link href={news.link} isExternal>
              <Button>Read More</Button>
            </Link>
          </Flex>
        </Stack>
      </Box>
    </div>
  );
};

export default NewsCard;
