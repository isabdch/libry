import { styled } from "../../../stitches.config";

export const HeaderComponent = styled("header", {
  width: "100%",
  height: "100px",
  flexCenterAI: "",
  backgroundColor: "$lilac65",

  ".container": {
    flexCenterJC: "space-between",
    width: "90%",

    ".content": {
      flexCenterJC: "",
      color: "$purple200",
      gap: "20px",

      ".logo": {
        flexCenterJC: "",
        gap: "10px",

        h1: {
          fontFamily: "logoFont",
          letterSpacing: "7px",
          color: "$purple500",
        },
      },

      ".myShelf": {
        fontSize: "1.2em",
        borderLeft: "1px solid $lilac100",
        lineHeight: "60px",
        padding: "0px 20px",
        transition: ".2s",

        "&:hover": {
          color: "$purple100",
        },
      },
    },
  },
});
