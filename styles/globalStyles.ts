import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  "@font-face": [
    {
      src: "url('./font/Nunito-Regular.ttf')",
      fontFamily: "myFont",
    },
    {
      src: "url('./font/Comfortaa-VariableFont_wght.ttf')",
      fontFamily: "logoFont",
    },
  ],

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

    scrollBehavior: "smooth",
  },

  body: {
    background: "$lilac50 no-repeat fixed center",
    backgroundSize: "cover",
    overflowX: "hidden",

    "@max1024px": {
      background:
        "$lilac50 url('./images/wallpaper.svg') no-repeat fixed center",
      backgroundSize: "cover",
    },
  },

  button: {
    border: 0,
    cursor: "pointer",
  },

  input: {
    border: 0,
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  li: {
    listStyleType: "none",
  },
});
