import { styled } from "../../../../stitches.config";

export const SignInButtonComponent = styled("button", {
  padding: "10px 25px",
  borderRadius: "2rem",
  backgroundColor: "$lilac100",
  color: "$white500",
  flexCenterJC: "",
  gap: "10px",
  fontSize: "1rem",
  transition: ".2s",

  ".googleIcon": {
    fontSize: "0.9em",
  },

  "&:hover": {
    backgroundColor: "$lilac80",
  },

  "@min1440px": {
    fontSize: "1.3vw",
  },

  "@max425px": {
    ".googleIcon": {
      display: "none",
    },
  },
});

export const SignOutButtonComponent = styled("button", {
  padding: "3px 18px",
  borderRadius: "2rem",
  backgroundColor: "$lilac100",
  color: "$white500",
  border: "2px solid $purple200",
  flexCenterJC: "",
  gap: "10px",
  fontSize: "1rem",
  transition: ".2s",

  "&:hover": {
    backgroundColor: "$lilac80",
  },

  ".signOutIcon": {
    fontSize: "0.8em",
  },

  ".profileImg": {
    borderRadius: "50%",
  },

  "@min1440px": {
    fontSize: "1.3vw",
  },
});
