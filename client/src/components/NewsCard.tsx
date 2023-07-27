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
  Link,
} from "@chakra-ui/react";

interface News {
  banner: string;
  source: string;
  category: string;
  title: string;
  summary: string;
  link: string;
}

const NewsCard = ({ news }: { news: News }) => {
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
            <Text color={"gray.500"}>Feb 08, 2021</Text>
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
