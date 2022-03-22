import { styled } from "../../../stitches.config";

export const HeaderComponent = styled("header", {
  width: "100%",
  height: "100px",
  flexCenterAI: "",
  backgroundColor: "$lilac65",
  position: "fixed",

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
        cursor: "pointer",

        h1: {
          fontFamily: "logoFont",
          letterSpacing: "3px",
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

  ".menuBtn": {
    backgroundColor: "transparent",
    color: "$purple500",
    display: "none",
    position: "absolute",
    top: 0,
    right: 0,
    padding: "5px",
  },

  "@max768px": {
    width: "30vw",
    height: "100vh",
    alignItems: "center",

    ".container": {
      height: "90%",
      flexDirection: "column",

      ".content": {
        flexDirection: "column",

        ".myShelf": {
          borderLeft: "0px",
          borderTop: "1px solid $lilac100",
        },
      },
    },

    ".menuBtn": {
      display: "inherit",
    },

    ".hideMenuNav": {
      display: "none",
    },

    "&.hideMenu": {
      backgroundColor: "transparent",
      width: "20px",
    },
  },

  "@max650px": {
    fontSize: "0.8rem",
  },

  "@max560px": {
    width: "40vw",
  },

  "@max425px": {
    width: "50vw",
  },
});
