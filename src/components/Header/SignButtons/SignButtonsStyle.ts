import { keyframes, styled } from "../../../../stitches.config";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const SignInButtonComponent = styled("button", {
  width: "17vw",
  height: "45px",
  padding: "10px",
  borderRadius: "9999px",
  backgroundColor: "$vibrantColor",
  color: "$white500",
  flexCenterJC: "space-around",
  gap: "10px",
  fontSize: "1rem",
  transition: ".2s",

  ".noLoading": {
    flexCenterJC: "space-around",
    gap: "10px",

    ".googleIcon": {
      fontSize: "0.9em",
    },
  },

  "&:hover": {
    filter: "brightness(1.08)",
  },

  "@min1440px": {
    fontSize: "1.3vw",
    height: "50%",
  },

  "@max1250px": {
    width: "20vw",
  },

  "@max1024px": {
    width: "25vw",
  },

  "@max768px": {
    width: "95%",
  },

  "@max425px": {
    ".googleIcon": {
      display: "none",
    },
  },
});

export const ModalTrigger = styled(AlertDialog.Trigger, {
  width: "17vw",
  height: "45px",
  padding: "10px",
  borderRadius: "9999px",
  backgroundColor: "$vibrantColor",
  color: "$white500",
  border: "2px solid $darkerVibrantColor",
  flexCenterJC: "space-around",
  gap: "10px",
  fontSize: "1rem",
  transition: ".2s",

  "&:hover": {
    filter: "brightness(1.08)",
  },

  "&:focus": {
    outline: "2px solid transparent",
  },

  ".signOutIcon": {
    fontSize: "0.8em",
  },

  ".profileImg": {
    width: "35px",
    height: "35px",
    position: "relative",

    img: {
      borderRadius: "50%",
    },
  },

  "@min1440px": {
    fontSize: "1.3vw",
    height: "50%",

    ".signOutIcon": {
      fontSize: "0.7em",
    },

    ".profileImg": {
      width: "2.5vw",
      height: "2.5vw",
    },
  },

  "@max1250px": {
    width: "20vw",
  },

  "@max1024px": {
    width: "25vw",
  },

  "@max768px": {
    width: "95%",

    ".profileImg": {
      display: "none",
    },
  },
});

export const ModalOverlay = styled(AlertDialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "#00000040",
  zIndex: 2,

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

export const ModalContent = styled(AlertDialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "40vh",
  maxWidth: "450px",
  maxHeight: "85vh",
  backgroundColor: "$inputBackgroundColor",
  boxShadow: "-1px 1px 10px $shadowColor",
  borderRadius: "1em",
  padding: "25px",
  zIndex: 2,
  flexCenterJC: "space-around",
  flexDirection: "column",
  fontSize: "1.25em",
  textAlign: "center",

  "&:focus": {
    outline: "none",
  },

  div: {
    flexCenterAI: "center",
    gap: "25px",
  },

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },

  "@min1440px": {
    maxWidth: "35vw",
    fontSize: "1.4vw",
  },
});

export const ModalTitle = styled(AlertDialog.Title, {
  color: "$darkerColor",
});

export const ModalDescription = styled(AlertDialog.Description, {
  color: "$moreDarkColor",

  "@min1440px": {
    fontSize: "1.5vw",
  },
});

export const ModalCancel = styled(AlertDialog.Cancel, {
  padding: "10px 35px",
  borderRadius: "2rem",
  backgroundColor: "$headerColor",
  color: "$white500",
  transition: ".2s",
  fontSize: "0.9em",

  "&:hover": {
    backgroundColor: "$mediumColor",
  },

  "@min1440px": {
    fontSize: "1.3vw",
    padding: "0.8vw 3vw",
    borderRadius: "2em",
  },

  "@max375px": {
    padding: "10px 25px",
  },
});

export const ModalAction = styled(AlertDialog.Action, {
  padding: "10px 35px",
  borderRadius: "2rem",
  backgroundColor: "$mediumDarkColor",
  color: "$white500",
  transition: ".2s",
  fontSize: "0.9em",

  "&:hover": {
    backgroundColor: "$mediumColor",
  },

  "@min1440px": {
    fontSize: "1.3vw",
    padding: "0.8vw 3vw",
    borderRadius: "2em",
  },

  "@max375px": {
    padding: "10px 25px",
  },
});
