import Intro from "../components/MainPage/Intro";
import About from "../components/MainPage/About";
import Wrapper from "../components/layouts/Wrapper";

const Home = () => {
  return (
    <Wrapper t="Homepage" d="Bek Slambek's homepage. Really worth your attention">
        <Intro />
        <About />
    </Wrapper>
  );
};

export default Home;
