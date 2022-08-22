import Head from "next/head";
import Navbar from "./Navbar.js";
import { Box} from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage | Bek Slambek</title>
      </Head>
      <Navbar path={router.asPath} />
      {children}
    </Box>
  );
};

export default Main;