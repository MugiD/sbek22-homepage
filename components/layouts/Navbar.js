import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../CustomComponents/theme-toggle-button";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const hoverColor = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        fontWeight={active ? "extrabold" : "regular"}
        _hover={{ bg: hoverColor }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: "blur(10px" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        align="center"
        justify="space-between"
      >
        <Box ml={2} display={{ base: "inline-block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <NextLink href="/" passHref>
                <MenuItem as={Link}>
                  <a>Home</a>
                </MenuItem>
              </NextLink>
              <NextLink href="/resources" passHref>
                <MenuItem as={Link}>
                  <a>Resources</a>
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            <a>Home</a>
          </LinkItem>
          <LinkItem href="/resources" path={path}>
            <a>Resources</a>
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
