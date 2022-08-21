import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Section from "./Section";
import styled from "@emotion/styled";

const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin-left: 20px;
  margin-right: 20px;
`;

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  margin-left: 20px;
  color: #27b0a6;
`;

const Bio = () => {
  return (
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title" mx={5}>
        My Journey
      </Heading>
      <BioSection>
        <BioYear>07/01/2020</BioYear> Basics of Frontend Development
      </BioSection>
      <BioSection>
        <BioYear>07/28/2020</BioYear> Finishing One Piece in two months
      </BioSection>
      <BioSection>
        <BioYear>04/30/2022</BioYear> Participating in school Hackathon
      </BioSection>
      <BioSection>
        <BioYear>2022 - now</BioYear> Web Development, Python
      </BioSection>
      <Box
        borderRadius="lg"
        my={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
        mx={5}
      >
        To be continued...
      </Box>
    </Section>
  );
};

export default Bio;
