import {
  Box,
  Heading,
  chakra,
  Image,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import AnimatedText from "../CustomComponents/AnimatedText";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Intro = () => {
  return (
    <Box>
      <Box
        display={{ md: "flex", base: "block" }}
        textAlign="center"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="200px"
          h="200px"
          display="inline-block"
          borderRadius="full"
        >
          <ProfileImage
            src="/images/profileBek.jpeg"
            alt="Profile image"
            borderRadius="full"
            width="100%"
            height="100%"
          />
        </Box>

        <Box flexGrow={1} textAlign="center" mx={5}>
          <Heading variant="page-title" fontSize="48px" fontWeight="extrabold">
            Bek Slambek
          </Heading>
          <AnimatedText>Jack of all trades (Beta version)</AnimatedText>
          <Box
            borderRadius="lg"
            mt={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          >
            Enthusiast, Developer, Designer
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
