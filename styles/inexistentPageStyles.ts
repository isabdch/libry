import { styled } from "../stitches.config";

export const Container = styled("div", {
  height: "80vh",
  flexCenterAI: "center",
  flexDirection: "column",
  gap: "20px",
  color: "$purple500",

  p: {
    fontSize: "1.1em",

    a: {
      fontSize: "1.4em",
      color: "$purple100",
      transition: ".2s",

      "&:hover": {
        color: "$purple500",
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
        color: "$purple100",
        transition: ".2s",

        "&:hover": {
          color: "$purple500",
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
        color: "$purple100",
        transition: ".2s",

        "&:hover": {
          color: "$purple500",
        },
      },
    },
  },
});
