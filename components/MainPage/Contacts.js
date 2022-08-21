import { IoLogoLinkedin, IoLogoTwitter, IoMail } from "react-icons/io5";
import { List, Link, ListItem, Button, Heading } from "@chakra-ui/react";
import Section from "../Section";

const Contacts = () => {
  return (
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title" mx={5}>
        My Contacts
      </Heading>
      <List mx={5}>
        <ListItem>
          <Link href="mailto:bekslambek22@gmail.com" target="_blank">
            <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
              bekslambek22@gmail.com
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/sbek22_" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoTwitter />}
            >
              @sbek22
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://linkedin.com/in/sbek22" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoLinkedin />}
            >
              @sbek22
            </Button>
          </Link>
        </ListItem>
      </List>
    </Section>
  );
};

export default Contacts;
