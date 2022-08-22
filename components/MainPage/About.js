import Section from "../CustomComponents/Section";
import Paragraph from "../CustomComponents/Paragraph";
import { Heading, Box, Button, Flex, Image } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

const About = () => {
  return (
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        About
      </Heading>
      <Flex
        justify="space-around"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Box w={{ base: "100%", md: "50%" }}>
          <Paragraph>
            Bek is a full-stack developer from Kazakhstan. He works with
            different technologies such as JavaScript, C# and Python. Bek
            believes that YouTube tutorials can help him become a valuable
            programmer.
          </Paragraph>
          <Paragraph>
            I am interested in Sports, Video Games, Anime, Graphic Design, Web
            Development
          </Paragraph>
          <Box align="center" my={4}>
            <a href="https://github.com/MugiD/" target="_blank">
              <Button rightIcon={<LinkIcon />} bg="orange.400" mr={2}>
                My Github
              </Button>
            </a>
            <a href="https://github.com/jolshylar/" target="_blank">
              <Button rightIcon={<LinkIcon />} bg="orange.400">
                My Team
              </Button>
            </a>
          </Box>
        </Box>
        <Image
          src="./images/chopper.jpg"
          height="25%"
          width="25%"
          display={{ base: "none", md: "block" }}
        />
      </Flex>
    </Section>
  );
};

export default About;
