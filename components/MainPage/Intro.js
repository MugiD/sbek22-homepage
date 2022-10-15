import {
  Box,
  Heading,
  chakra,
  Image,
  useColorModeValue,
  Text,
  usePrefersReducedMotion,
  keyframes,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const type = keyframes`
  from, to { width: 0; border-color: transparent}
  50% { width: 100%; border-color: white }
`;

const typeBorder = keyframes`
  from, to { border-color: transparent}
  50% { border-color: white }
`;

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Intro = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const phrases = [
    "Jack of All Trades",
    "How to Leave Vim?",
    "Average Math Enjoyer",
  ];

  const [phrase, setPhrase] = useState(
    phrases[Math.floor(Math.random() * phrases.length)]
  );

  useEffect(() => {
    setTimeout(() => {
      setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    }, 10000);
  });

  const animation = prefersReducedMotion
    ? undefined
    : `${type} infinite 10s linear,
    ${typeBorder} infinite .42s step-end`;

  return (
    <Box my={10}>
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
          w={200}
          h={200}
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
          <Heading
            variant="page-title"
            fontWeight="extrabold"
            fontSize={{ base: 36, md: 48 }}
          >
            Bek Slambek
          </Heading>
          <Text
            mx="auto"
            maxW="max-content"
            animation={animation}
            overflow="hidden"
            borderRight="solid"
            whiteSpace="nowrap"
            fontWeight="semiBold"
            fontSize={18}
            pr={1}
          >
            {phrase}
          </Text>
          <Box
            borderRadius="lg"
            mt={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
          >
            Enthusiast, Developer, Designer
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
