import Intro from "../components/MainPage/Intro";
import About from "../components/MainPage/About";
import Wrapper from "../components/layouts/Wrapper";
import Projects from "../components/MainPage/Projects";

const Home = () => {
  return (
    <Wrapper t="Homepage" d="Bek Slambek's homepage. Really worth your attention">
        <Intro />
        <About />
        <Projects />
    </Wrapper>
  );
};

export default Home;
