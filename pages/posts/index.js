import Date from "../../components/date";
import { getSortedPostsData } from "../../lib/posts";
import Section from "../../components/CustomComponents/Section";
import {
  Heading,
  Box,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Wrapper from "../../components/layouts/Wrapper";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Post = ({ allPostsData }) => {
  return (
    <Wrapper t="Posts" d="Read blogs written by Bek Slambek. Deep thoughts often stay here">
      <Heading variant="section-title">My Posts</Heading>
      <Text
        textAlign="center"
        fontSize="20px"
        color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
        mb={3}
      >
        Here I share my opinion on different topics
      </Text>
      <Section delay={0.1}>
        <Box
          display="grid"
          gridTemplateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          gap={4}
        >
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} passHref>
              <Box
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
                p={4}
                cursor="pointer"
                rounded="md"
                key={id}
                _hover={{ transform: "translateY(-5px)" }}
                transition="background 1s ease"
              >
                <Text fontWeight="extrabold">{title}</Text>
                <Box
                  color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
                >
                  <Date dateString={date} />
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Section>
    </Wrapper>
  );
};

export default Post;
