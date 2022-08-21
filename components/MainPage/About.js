import Section from "../CustomComponents/Section";
import Paragraph from "../CustomComponents/Paragraph";
import { Heading, Box, Button } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

const About = () => {
  return (
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title" mx={5}>
        About
      </Heading>
      <Paragraph>
        Bek is a full-stack developer from Kazakhstan. He works with different
        technologies such as JavaScript and C#. Bek believes that YouTube
        tutorials can help him become a valuable programmer.
      </Paragraph>
      <Box align="center" my={4}>
        <a href="https://github.com/MugiD/" target="_blank">
          <Button rightIcon={<LinkIcon />} colorScheme="teal" mr={2}>
            My Github
          </Button>
        </a>
        <a href="https://github.com/jolshylar/" target="_blank">
          <Button rightIcon={<LinkIcon />} colorScheme="teal">
            My Team
          </Button>
        </a>
      </Box>
    </Section>
  );
};

export default About;
