import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  "@font-face": {
    src: "url('')",
    fontFamily: "myFont",
  },

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "myFont",
  },

  html: {
    "@max1080px": {
      fontSize: "93.75%",
    },

    "@max720px": {
      fontSize: "87.5%",
    },
  },

  body: {
    background: "$white500 no-repeat fixed center",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
  },

  button: {
    border: 0,
    cursor: "pointer",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  li: {
    listStyleType: "none",
  },
});
