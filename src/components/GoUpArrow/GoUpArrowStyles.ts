import { styled } from "../../../stitches.config";

export const StyledGoUpButton = styled("button", {
  position: "fixed",
  margin: "10px",
  bottom: 0,
  fontSize: "4em",
  backgroundColor: "transparent",
  color: "$darkColor",
  flexCenterAI: "center",
  transition: "all.2s",
  zIndex: 1,

  "&:hover": {
    color: "$moreDarkColor",
  },

  svg: {
    cursor: "pointer",
    pointerEvents: "none",
  },

  "@min1440px": {
    fontSize: "5vw",
  },

  "@max1024px": {
    margin: "5px 0px",
  },
});
