import { styled } from "../../../stitches.config";

export const BooksSectionComponent = styled("section", {
  width: "100%",
  marginTop: "5vh",
  padding: "0px 50px",
  flexCenterAI: "",
});

export const BooksSectionContainer = styled("div", {
  borderTop: "1px solid $lilac80",
  width: "95%",
  display: "flex",
});

export const BookCard = styled("div", {
  width: "180px",
  backgroundColor: "$lilac65",
  borderRadius: "0.5em",
  flexCenterJC: "",
  flexDirection: "column",
  gap: "20px",
  padding: "15px",
  margin: "20px",
  textAlign: "center",

  img: {
    borderRadius: "0.5em",
  },

  h1: {
    color: "$purple500",
  },

  button: {
    padding: "5px 20px",
    borderRadius: "2rem",
    backgroundColor: "$lilac100",
    color: "$white500",
    fontSize: "0.9em",
    transition: ".2s",

    "&:hover": {
      backgroundColor: "$lilac80",
    },
  },
});
