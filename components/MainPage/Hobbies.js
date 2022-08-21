import Section from "../CustomComponents/Section";
import Paragraph from "../CustomComponents/Paragraph";
import { Heading } from "@chakra-ui/react";

const Hobbies = () => {
  return (
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title" mx={5}>
        Things I love
      </Heading>
      <Paragraph>
        Sports, Video Games, Anime, Graphic Design, Web Development
      </Paragraph>
    </Section>
  );
};

export default Hobbies;
