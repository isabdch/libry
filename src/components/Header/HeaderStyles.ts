import { styled } from "../../../stitches.config";
import * as Switch from "@radix-ui/react-switch";

export const HeaderComponent = styled("header", {
  width: "100%",
  height: "100px",
  flexCenterAI: "",
  backgroundColor: "$headerColor",
  position: "sticky",
  top: 0,
  zIndex: 2,

  ".container": {
    flexCenterJC: "space-between",
    width: "90%",

    ".content": {
      flexCenterJC: "",
      color: "$moreDarkColor",
      gap: "20px",

      ".logo": {
        flexCenterJC: "",
        gap: "10px",
        cursor: "pointer",

        h1: {
          fontFamily: "logoFont",
          letterSpacing: "3px",
          color: "$vibrantColor",
        },

        ".img": {
          position: "relative",
          width: "35px",
          height: "35px",
        },
      },
    },

    ".buttons": {
      flexCenterAI: "center",
      gap: "20px",
    },
  },

  ".menuBtn": {
    backgroundColor: "$headerColor",
    color: "$darkerColor",
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

      ".content": {
        ".logo": {
          ".img": {
            width: "2.6vw",
            height: "2.6vw",
          },
        },
      },
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

      ".buttons": {
        flexCenterAI: "center",
        flexDirection: "column",
      },
    },

    ".menuBtn": {
      display: "inherit",
      borderRadius: "50%",
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

export const SwitchRoot = styled(Switch.Root, {
  width: "42px",
  height: "25px",
  backgroundColor: "$lighterColor",
  borderRadius: "9999px",
  position: "relative",
  cursor: "pointer",

  '&[data-state="checked"]': {
    backgroundColor: "$mediumColor",
  },

  "@min1440px": {
    width: "3vw",
    height: "1.8vw",
  },
});

export const StyledSwitchThumb = styled(Switch.Thumb, {
  display: "block",
  width: "21px",
  height: "21px",
  backgroundColor: "$vibrantColor",
  borderRadius: "9999px",
  transition: ".1s",
  transform: "translateX(2px)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX(calc(100% - 2px))",
    backgroundColor: "$darkerVibrantColor",
  },

  "@min1440px": {
    width: "1.4vw",
    height: "1.4vw",
  },
});
