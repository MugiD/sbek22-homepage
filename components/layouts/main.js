import Navbar from "./Navbar.js";
import Footer from './Footer.js'
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg">{children}</Container>
      <Footer />
    </Box>
  );
};

export default Main;
