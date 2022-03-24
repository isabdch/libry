import { styled } from "../../../stitches.config";

export const BooksSectionComponent = styled("section", {
  width: "100%",
  marginTop: "5vh",
  padding: "0px 20px",
  flexCenterAI: "",
});

export const BooksSectionContainer = styled("div", {
  borderTop: "1px solid $lilac80",
  flexCenterAI: "",
  flexWrap: "wrap",
});

export const BookCard = styled("div", {
  width: "210px",
  backgroundColor: "$lilac65",
  borderRadius: "0.5em",
  flexCenterJC: "space-between",
  flexDirection: "column",
  padding: "15px",
  gap: "15px",
  margin: "20px 10px",
  textAlign: "center",
  transition: ".1s",
  cursor: "pointer",

  ".img": {
    height: "220px",
    width: "170px",

    img: {
      borderRadius: "0.5em",
    },
  },

  h1: {
    color: "$purple500",
    fontSize: "1.1em",
  },

  button: {
    padding: "3px 20px",
    borderRadius: "2rem",
    backgroundColor: "$lilac100",
    color: "$white500",
    fontSize: "1em",
    transition: ".2s",

    "&:hover": {
      backgroundColor: "$lilac80",
    },

    "&:active": {
      backgroundColor: "$lilac100",
    },
  },

  "&:hover": {
    transform: "scale(1.1)",
  },

  "&:active": {
    backgroundColor: "#E8CBFF",
  },
});
