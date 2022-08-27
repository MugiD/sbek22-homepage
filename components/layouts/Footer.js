import {
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoCodepen
  } from "react-icons/io5";
  import {
    chakra,
    Container,
    Stack,
    VisuallyHidden,
    useColorModeValue,
    Icon
  } from "@chakra-ui/react";
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        as="a"
        rounded="full"
        w={16}
        h={16}
        cursor="pointer"
        href={href}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        transition="background 0.3s ease"
        target="_blank"
        rel="noreferrer"
        _hover={{ bg: "whiteAlpha.200" }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
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
            <Icon as={IoLogoTwitter} w={8} h={8} />
          </SocialButton>
          <SocialButton label="Instagram" href="https://instagram.com/sbek22">
            <Icon as={IoLogoInstagram} w={8} h={8}/>
          </SocialButton>
          <SocialButton label="Codepen" href="https://codepen.io/mugid">
            <Icon as={IoLogoCodepen} w={8} h={8}/>
          </SocialButton>
          <SocialButton label="GitHub" href="https://github.com/MugiD">
            <Icon as={IoLogoGithub} w={8} h={8}/>
          </SocialButton>
          <SocialButton label="LinkedIn" href="https://linkedin.com/in/sbek22">
            <Icon as={IoLogoLinkedin}  w={8} h={8}/>
          </SocialButton>
        </Stack>
      </Container>
    );
  }