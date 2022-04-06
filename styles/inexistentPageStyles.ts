import { styled } from "../stitches.config";

export const Container = styled("div", {
  height: "80vh",
  flexCenterAI: "center",
  flexDirection: "column",
  gap: "20px",
  color: "$darkerColor",

  p: {
    fontSize: "1.1em",

    a: {
      fontSize: "1.4em",
      color: "$darkColor",
      transition: ".2s",

      "&:hover": {
        color: "$darkerColor",
      },
    },
  },

  "@min1440px": {
    h1: {
      fontSize: "2.2vw",
    },

    p: {
      fontSize: "1.5vw",

      a: {
        fontSize: "1.2em",
        color: "$darkColor",
        transition: ".2s",

        "&:hover": {
          color: "$darkerColor",
        },
      },
    },
  },

  "@max375px": {
    h1: {
      fontSize: "1.5em",
    },

    p: {
      fontSize: "1.1em",

      a: {
        fontSize: "1.2em",
        color: "$darkColor",
        transition: ".2s",

        "&:hover": {
          color: "$darkerColor",
        },
      },
    },
  },
});
