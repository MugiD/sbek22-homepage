import { Container } from "@chakra-ui/react";
import Head from "next/head";

const Wrapper = ({ children, t, d }) => {
  return (
    <Container maxW="container.lg" pt={14}>
      <Head>
        <title> {t} | Bek Slambek</title>
        <meta
          property="description"
          content={`${d}`}
        />
        <meta property="og:title" content={`${t} | Bek Slambek`} />
        <meta
          property="og:description"
          content={`${d}`}
        />
        <meta name="twitter:title" content={`${t} | Bek Slambek`} />
      </Head>
      {children}
    </Container>
  );
};

export default Wrapper;
