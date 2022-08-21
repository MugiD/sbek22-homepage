import { Box, Heading, chakra, Image, useColorModeValue } from "@chakra-ui/react";

const ProfileImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
  });

const BackImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
  });

const Intro = () => {
  return (
    <>
      <BackImage
        width="1000px"
        height="200px"
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
              src="/images/profileBek.jpeg"
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
    </>
  );
};

export default Intro;
