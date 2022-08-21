import Intro from "../components/Intro";
import About from "../components/About";
import Bio from "../components/Journey";
import Hobbies from "../components/Hobbies";
import Contacts from "../components/Contacts";
import { Container } from '@chakra-ui/react'

const Home = () => {
  return (
    <Container>
      <Intro />
      <About />
      <Bio />
      <Hobbies />
      <Contacts />
    </Container>
  );
};

export default Home;
