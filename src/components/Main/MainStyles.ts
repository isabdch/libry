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
    color: "$darkerColor",

    h1: {
      margin: "15px 0px",
      fontFamily: "logoFont",
      letterSpacing: "1px",
      color: "$mediumDarkColor",
      textShadow: "-2px 2px #B1780F",
    },

    p: {
      margin: "5px 0px",
    },

    form: {
      margin: "15px 0px",
      width: "fit-content",
      border: "2px solid $mediumDarkColor",
      borderRadius: "2em 2em 2em 2em",

      "&:focus-within": {
        outline: "1px solid $mediumDarkColor",
      },

      input: {
        width: "33vw",
        padding: "13px 15px",
        borderRadius: "2em 0em 0em 2em",
        fontSize: "0.8em",
        color: "$darkerColor",
        outline: "none",

        "&::placeholder": {
          color: "$mediumDarkColor",
        },
      },

      button: {
        padding: "13px",
        paddingRight: "20px",
        borderRadius: "0em 2em 2em 0em",
        fontSize: "0.8em",
        backgroundColor: "$mediumDarkColor",
        color: "$white500",
        transition: ".2s",

        "&:hover": {
          backgroundColor: "$mediumColor",
        },
      },
    },
  },

  "@min1440px": {
    fontSize: "1.45vw",
    height: "80vh",
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
