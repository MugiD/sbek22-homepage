import Section from "../CustomComponents/Section";
import Paragraph from "../CustomComponents/Paragraph";
import { Heading, Box, Button, Flex, Image, Icon, Stack } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { SiTailwindcss, SiChakraui, SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si'

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
            I'm a full-stack developer from Kazakhstan. I widely use different
            technologies for Web Development: Typescript, NextJS, React and
            Chakra(sometimes I prefer to use TailwindCSS).
          </Paragraph>
          <Stack direction="row" spacing={6} justifyContent="center" my={6}>
            <Icon as={SiReact} w={8} h={8} />
            <Icon as={SiNextdotjs} w={8} h={8}/>
            <Icon as={SiTypescript} w={8} h={8}/>
            <Icon as={SiChakraui} w={8} h={8}/>
            <Icon as={SiTailwindcss}  w={8} h={8}/>
        </Stack>
          <Paragraph>
            I am interested in Sports, Video Games, Anime, Graphic Design, Web
            Development, Python etc.
          </Paragraph>
          <Box align="center" my={4}>
            <a href="https://github.com/MugiD/" target="_blank">
              <Button rightIcon={<LinkIcon />} colorScheme="orange" mr={2}>
                My Github
              </Button>
            </a>
            <a href="https://github.com/jolshylar/" target="_blank">
              <Button rightIcon={<LinkIcon />} colorScheme="orange">
                My Team
              </Button>
            </a>
          </Box>
        </Box>
        <Image
          src="./images/chopper.jpg"
          height="30%"
          width="30%"
        />
      </Flex>
    </Section>
  );
};

export default About;
