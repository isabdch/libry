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
    color: "$purple500",

    h1: {
      margin: "15px 0px",
      fontFamily: "logoFont",
      letterSpacing: "1px",
      color: "$lilac100",
      textShadow: "-2px 2px #7B2CBF",
    },

    p: {
      margin: "5px 0px",
    },

    form: {
      margin: "15px 0px",
      width: "fit-content",
      borderRadius: "2em 2em 2em 2em",

      "&:focus-within": {
        outline: "2px solid $lilac100",
      },

      input: {
        width: "33vw",
        padding: "13px 15px",
        border: "none",
        borderRadius: "2em 0em 0em 2em",
        fontSize: "0.8em",
        color: "$purple500",
        outline: "none",

        "&::placeholder": {
          color: "$lilac100",
        },
      },

      button: {
        padding: "13px",
        paddingRight: "20px",
        borderRadius: "0em 2em 2em 0em",
        fontSize: "0.8em",
        backgroundColor: "$lilac100",
        color: "$white500",
        transition: ".2s",

        "&:hover": {
          backgroundColor: "$lilac80",
        },
      },
    },
  },

  ".img": {
    position: "absolute",
    zIndex: "-1",
    top: "50%",
    transform: "translateY(-50%)",
    right: "3%",
    width: "35vw",
    height: "35vw",
  },

  "@min1440px": {
    fontSize: "1.45vw",
    height: "80vh",
  },

  "@max1024px": {
    ".img": {
      display: "none",
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
