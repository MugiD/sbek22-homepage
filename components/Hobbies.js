import Section from "./Section";
import Paragraph from "./Paragraph";
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
