import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import Image from "next/image";
import Section from "../components/section";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BioSection, BioYear } from "../components/bio";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});
const BackImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Page = () => {
  return (
    <Container
      pb={2}
      mt={2}
      px={0}
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      borderRadius="10px"
    >
      <BackImage
        width="1000px"
        height="400px"
        src="/images/saitama.png"
        alt="saitama"
        borderRadius="10px 10px 0 0"
      />

      <Box display={{ md: "flex " }} mx={5}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Bek Slambek
          </Heading>
          <p>Enthusiast, Developer, Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            position={{ md: "relative", base: "static" }}
            top="-10"
            right="0"
          >
            <ProfileImage
              src="/images/profileBek.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
        mx={5}
      >
        Welcome to my homepage!
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
        mx={5}
      >
        Inspired by{" "}
        <Link
          href="https://youtu.be/bSMZgXzC9AA"
          color={useColorModeValue("purple", "orange")}
          fontWeight="bold"
        >
          this
        </Link>{" "}
        tutorial
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" mx={5}>
          About
        </Heading>
        <Paragraph>
          Bek is a full-stack developer from Kazakhstan. He works with different
          technologies starting from JavaScript and ending with C#. Bek believes that YTube
          tutorials can help him to become a PROgrammer
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My works
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" mx={5}>
          Bio
        </Heading>
        <BioSection>
          <BioYear>07/22/2006</BioYear> Born in Almaty, Kazakhstan
        </BioSection>
        <BioSection>
          <BioYear>05/20/2019</BioYear> Entering in Nazarbayev Intellectual School
        </BioSection>
        <BioSection>
          <BioYear>07/01/2020</BioYear> Going through courses of Front-end developer
        </BioSection>
        <BioSection>
          <BioYear>07/28/2020</BioYear> Watching One Piece barely in two months
        </BioSection>
        <BioSection>
          <BioYear>04/30/2022</BioYear> Partisipating in school Hackathon
        </BioSection>
        <BioSection>
          <BioYear>2022 - now</BioYear> Web Development, Introducing to ML
        </BioSection>
        <Box
        borderRadius="lg"
        my={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
        mx={5}
      >
        To be continued...
      </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" mx={5}>
          Things I love
        </Heading>
        <Paragraph>
          Sport, Video Games, Anime, Food, Design, Web Development, Machine
          Learning, Wasting Time
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mx={5}>
          My Contacts
        </Heading>
        <List mx={5}>
          <ListItem>
            <Link href="https://github.com/MugiD" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @MugiD
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/sbek22_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @sbek22
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/sbek22" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Bek Slambek
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Page;
