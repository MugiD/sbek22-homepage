import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fff", "#000")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 48,
        fontWeight: "extrabold",
        marginTop: 10,
        marginBottom: 1,
        textAlign: "center",
      },
    },
  },
};

const fonts = {
  Heading: "'Lato'"
};


const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
});

export default theme;
