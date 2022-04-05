import { styled } from "../../../stitches.config";

export const BookshelfHeaderComponent = styled("header", {
  width: "100%",
  height: "60px",
  backgroundColor: "$lilac80",
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
    borderLeft: "1px solid $purple100",
    borderRight: "1px solid $purple100",
    width: "40%",
    height: "70%",
    flexCenterJC: "center",
  },

  ".checked": {
    color: "$purple200",
    fontWeight: "bold",

    "&:hover": {
      color: "$purple500",
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
