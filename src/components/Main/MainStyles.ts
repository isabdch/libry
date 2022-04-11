import { styled } from "../../../stitches.config";

export const MainComponent = styled("main", {
  width: "100%",
  height: "75vh",
  flexCenterAI: "flex-start",
  flexDirection: "column",
  fontSize: "1.2rem",
  position: "relative",

  ".searchSection": {
    padding: "0px 50px",
    color: "$darkColor",

    h1: {
      margin: "15px 0px",
      fontFamily: "logoFont",
      letterSpacing: "1px",
      color: "$vibrantColor",
    },

    p: {
      margin: "5px 0px",
    },

    form: {
      margin: "15px 0px",
      width: "fit-content",
      border: "2px solid $mediumColor",
      borderRadius: "2em 2em 2em 2em",

      "&:focus-within": {
        boxShadow: "0 0 0 1px $inputShadowColor",
      },

      input: {
        width: "33vw",
        padding: "13px 15px",
        borderRadius: "2em 0em 0em 2em",
        fontSize: "0.8em",
        color: "$darkerColor",
        backgroundColor: "$inputBackgroundColor",
        outline: "none",

        "&::placeholder": {
          color: "$mediumColor",
        },
      },

      button: {
        padding: "13px",
        paddingRight: "20px",
        borderRadius: "0em 2em 2em 0em",
        fontSize: "0.8em",
        backgroundColor: "$mediumColor",
        color: "$white500",
        transition: ".2s",

        "&:hover": {
          filter: "brightness(1.08)",
        },
      },
    },

    ".img": {
      width: "450px",
      height: "450px",
      position: "absolute",
      right: "5%",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: "-1",
    },
  },

  "@min1440px": {
    fontSize: "1.45vw",
    height: "80vh",

    ".searchSection": {
      ".img": {
        right: "3%",
        width: "35vw",
        height: "35vw",
      },
    },
  },

  "@max1250px": {
    ".searchSection": {
      ".img": {
        display: "none",
      },
    },
  },

  "@max768px": {
    height: "100vh",

    ".searchSection": {
      padding: "50px 50px",
      marginTop: "0px",
      fontSize: "0.9em",

      form: {
        input: {
          width: "50vw",
          padding: "10px 15px",
        },

        button: {
          padding: "10px",
          paddingRight: "15px",
        },
      },
    },
  },

  "@max425px": {
    textAlign: "center",

    ".searchSection": {
      flexCenterAI: "center",
      flexDirection: "column",
    },
  },
});
