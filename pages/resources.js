import {
  useColorModeValue,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import data from "../public/resourceList";
import Section from '../components/CustomComponents/Section'

export default function Resources() {
  return (
    <Container maxW="container.lg" pt={14}>
      <Heading variant="section-title">Resources</Heading>
      <Text
        textAlign="center"
        fontSize="20px"
        color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
      >
        Here is a collection of useful websites that will make your life better.
        Hope you will enjoy it
      </Text>
      <Section delay={0.1}>
        {data &&
          data.map((resource) => (
            <Box key={resource.name}>
              <a href={resource.source}>
                <Box
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
                  rounded="7px"
                  p="20px"
                  my="20px"
                >
                  <Heading color="orange.400" fontSize="lg" fontWeight="black">
                    {resource.name}
                  </Heading>
                  <p>~ {resource.description}</p>
                </Box>
              </a>
            </Box>
          ))}
      </Section>
    </Container>
  );
}
