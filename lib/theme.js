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
        _after: "underline",
        fontSize: 48,
        fontWeight: "extrabold",
        textUnderlineOffset: 6,
        marginTop: 3,
        marginBottom: 4,
        textAlign: "center",
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Lato'",
};

const colors = {
  glassTeal: "#88ccca",
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
  colors,
});

export default theme;
