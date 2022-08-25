import Head from "next/head";
import Navbar from "./Navbar.js";
import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer.js";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage | Bek Slambek</title>
        <link rel="shortcut icon" href="/images/chopper.jpg" type="image/x-icon" />
        <meta
          property="description"
          content="Bek Slambek's homepage. Really worth your attention"
        />
        <meta property="og:image" content="https://sbek22.xyz/images/card.png" />
        <meta property="og:title" content="Homepage | Bek Slambek" />
        <meta
          property="og:description"
          content="Bek Slambek's homepage. Really worth your attention"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Homepage | Bek Slambek" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@sbek22_" />
        <meta
          name="twitter:image"
          content="https://sbek22.xyz/images/card.png"
        />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg">{children}</Container>
      <Footer />
    </Box>
  );
};

export default Main;
