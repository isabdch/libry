import { styled } from "../../../stitches.config";

export const BookshelfHeaderComponent = styled("header", {
  width: "100%",
  height: "60px",
  backgroundColor: "$mediumColor",
  color: "#FFFFFFB3",
  flexCenterJC: "space-evenly",
  fontSize: "1.1em",

  div: {
    cursor: "pointer",
    transition: ".2s",

    "&:hover": {
      color: "$white500",
    },
  },

  "#currentlyReading": {
    borderLeft: "1px solid $darkColor",
    borderRight: "1px solid $darkColor",
    width: "40%",
    height: "70%",
    flexCenterJC: "center",
  },

  ".checked": {
    color: "$moreDarkColor",
    fontWeight: "bold",

    "&:hover": {
      color: "$darkerColor",
    },
  },

  "@min1440px": {
    height: "8vh",
    fontSize: "1.3vw",
  },

  "@max375px": {
    fontSize: "1em",

    "#currentlyReading": {
      width: "45%",
    },
  },
});
