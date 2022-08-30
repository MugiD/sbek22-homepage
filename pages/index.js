import { Container } from "@chakra-ui/react";
import Intro from "../components/MainPage/Intro";
import About from "../components/MainPage/About";

const Home = () => {
  return (
    <Container maxW="container.lg" pt={14}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage | Bek Slambek</title>
        <link
          rel="shortcut icon"
          href="/images/chopper.jpg"
          type="image/x-icon"
        />
        <meta
          property="description"
          content="Bek Slambek's homepage. Really worth your attention"
        />
        <meta
          property="og:image"
          content="https://sbek22.xyz/images/card.png"
        />
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
      <Intro />
      <About />
    </Container>
  );
};

export default Home;
