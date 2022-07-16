import Head from "next/head";
import { Heading, Box, Container } from "@chakra-ui/react";
import data from "../public/resourceList";
import styled from "@emotion/styled";

const Resource = styled(Box)`
  .resource {
    border: 2px solid #88ccca;
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
            <Box className="resource">
              <h1>
                <a href={resource.source}>{resource.name}</a>
              </h1>
              <p>~ {resource.description}</p>
            </Box>
          </Resource>
        ))}
    </Container>
  );
}
