import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href="/images/chopper.jpg"
          type="image/x-icon"
        />
        <meta
          property="og:image"
          content="https://sbek22.xyz/images/card.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@sbek22_" />
        <meta
          name="twitter:image"
          content="https://sbek22.xyz/images/card.png"
        />
      </Head>
      <Navbar path={router.asPath} />
      {children}
      <Footer />
    </Box>
  );
};

export default Main;
