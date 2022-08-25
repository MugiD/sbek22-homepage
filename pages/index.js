import { Container } from "@chakra-ui/react";
import Intro from "../components/MainPage/Intro";
import About from "../components/MainPage/About";

const Home = () => {
  return (
    <Container maxW="container.lg" pt={14}>
      <Intro />
      <About />
    </Container>
  );
};

export default Home;
