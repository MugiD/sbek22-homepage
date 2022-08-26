import { getAllPostsIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { Container, Box, useColorModeValue, Heading } from '@chakra-ui/react'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Container maxW="container.sm" pt={14}>
      <Head>
        <title>{postData.title} | Bek Slambek</title>
        <meta property="og:title" content={`${postData.title} | Bek Slambek`} />
        <meta
          property="og:description"
          content={`${postData.contentHtml}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={`${postData.title} | Bek Slambek`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@sbek22_" />
      </Head>
      <Box>
        <Heading>{postData.title}</Heading>
        <Box color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")} mb={6}>
          <Date dateString={postData.date} />
        </Box>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Box>
    </Container>
  );
}
