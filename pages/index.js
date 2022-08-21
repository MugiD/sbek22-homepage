import { Container } from "@chakra-ui/react";
import Intro from "../components/MainPage/Intro";
import About from "../components/MainPage/About";
import Bio from "../components/MainPage/Journey";
import Hobbies from "../components/MainPage/Hobbies";
import Contacts from "../components/MainPage/Contacts";

const Home = () => {
  return (
    <Container maxW="container.lg" pt={14}>
      <Intro />
      <About />
      <Bio />
      <Hobbies />
      <Contacts />
    </Container>
  );
};

export default Home;
