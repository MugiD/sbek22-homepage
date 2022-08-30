import {
  useColorModeValue,
  Box,
  Heading,
  Text,
  Select,
} from "@chakra-ui/react";
import data from "../public/resourceList";
import Section from "../components/CustomComponents/Section";
import Wrapper from "../components/layouts/Wrapper";

export function ResourceItem({ resource }) {
  return (
    <Box _hover={{ transform: "translateY(-5px)" }}>
      <a href={resource.source}>
        <Box
          bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
          rounded="7px"
          p="20px"
          my="20px"
        >
          <Box display="flex" gap={2}>
            <Heading color="orange.400" fontSize="lg" fontWeight="black">
              {resource.name}
            </Heading>
            {resource.type.map((r) => (
              <Text
              key={r.name}
                color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
              >
              {r.name} |
              </Text>
            ))}
          </Box>
          <p>~ {resource.description}</p>
        </Box>
      </a>
    </Box>
  );
}

export default function Resources() {
  return (
    <Wrapper t="Resources" d="I sometimes collect some websites that will make your life better">
      <Heading variant="section-title">Resources</Heading>
      <Text
        textAlign="center"
        fontSize="20px"
        color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
      >
        Here is a collection of useful websites that will make your life better.
        Hope you'll enjoy it
      </Text>
      <Section delay={0.1}>
        {data &&
          data.map((resource) => (
            <ResourceItem key={resource.name} resource={resource} />
          ))}
      </Section>
    </Wrapper>
  );
}
