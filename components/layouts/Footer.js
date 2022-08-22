import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";
import {
  Box,
  chakra,
  Container,
  Stack,
  VisuallyHidden,
  useColorModeValue,
  Text
} from "@chakra-ui/react";

const SocialButton = ({ children, label, href }) => {
  return (
      <chakra.button
        as="a"
        rounded="full"
        w={10}
        h={10}
        cursor="pointer"
        href={href}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        transition="background 0.3s ease"
        target="_blank"
        rel="noreferrer"
        _hover={{ bg: "whiteAlpha.200", transform: "translateY(-5px)" }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW="container.lg"
        my={10}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align="center"
        borderTop="solid"
        borderTopColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
      >
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="https://twitter.com/sbek22_">
            <IoLogoTwitter />
          </SocialButton>
          <SocialButton label="Instagram" href="https://instagram.com/sbek22">
            <IoLogoInstagram />
          </SocialButton>
          <SocialButton label="GitHub" href="https://github.com/MugiD">
            <IoLogoGithub />
          </SocialButton>
          <SocialButton label="LinkedIn" href="https://linkedin.com/in/sbek22">
            <IoLogoLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
