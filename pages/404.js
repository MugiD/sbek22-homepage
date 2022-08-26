import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const NotFound = () => {
  return (
    <Container maxW="container.lg" pt={14} minH="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Image src="/images/sadchoppa.jpg" alt="not found" rounded="full" w={200} h={200}/>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="orange" leftIcon={<ChevronLeftIcon />} >Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
