import { useColorModeValue, Box, Container, Heading } from "@chakra-ui/react";
import data from "../public/resourceList";
import styled from "@emotion/styled";

const Resource = styled(Box)`
  .resource {
    border-radius: 7px;
    padding: 20px;
    margin: 20px 0px;
  }

  .resource > h1 {
    font-size: 2em;
    font-weight: 700;
    color: #88ccca;
  }

  .resource > h1 > a {
    text-decoration: underline;
  }
`;

export default function Resources() {
  return (
    <Container>
      {data &&
        data.map((resource) => (
          <Resource key={resource.name}>
            <a href={resource.source}>
              <Box
                className="resource"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
              >
                <Heading
                  color={useColorModeValue("purple", "orange")}
                  fontSize="lg"
                >
                  {resource.name}
                </Heading>
                <p>~ {resource.description}</p>
              </Box>
            </a>
          </Resource>
        ))}
    </Container>
  );
}
