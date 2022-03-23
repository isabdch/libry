import { styled } from "../../../stitches.config";

export const HeaderComponent = styled("header", {
  width: "100%",
  height: "100px",
  flexCenterAI: "",
  backgroundColor: "$lilac65",
  position: "sticky",
  top: 0,
  zIndex: 1,

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
          textShadow: "-3px 1px #9D4EDD",
        },
      },
    },
  },

  ".menuBtn": {
    backgroundColor: "$lilac65",
    color: "$purple500",
    display: "none",
    position: "absolute",
    top: 0,
    right: 0,
    padding: "5px",
    fontSize: "1.2em",
  },

  "@min1440px": {
    height: "7vw",

    ".container": {
      fontSize: "1.3vw",
    },
  },

  "@max768px": {
    width: "30vw",
    height: "100vh",
    alignItems: "center",
    position: "fixed",

    ".container": {
      height: "90%",
      flexDirection: "column",

      ".content": {
        flexDirection: "column",
      },
    },

    ".menuBtn": {
      display: "inherit",
      borderRadius: "50%",
      "--balloon-color": "#C77DFF",
    },

    ".hideMenuNav": {
      display: "none",
    },

    "&.hideMenu": {
      backgroundColor: "transparent",
      width: "20px",
      height: "20px",
      margin: "10px",
      marginTop: "5px",
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
