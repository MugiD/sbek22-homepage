import { Container } from "@chakra-ui/react";
import Intro from "../components/MainPage/Intro";
import About from "../components/MainPage/About";
import Bio from "../components/MainPage/Journey";

const Home = () => {
  return (
    <Container maxW="container.lg" pt={14}>
      <Intro />
      <About />
      <Bio />
    </Container>
  );
};

export default Home;
