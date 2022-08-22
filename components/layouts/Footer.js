import { IoLogoLinkedin, IoLogoTwitter, IoMail, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      as="a"
      rounded="full"
      w={8}
      h={8}
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
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text textAlign="center">My Contacts:</Text>
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

