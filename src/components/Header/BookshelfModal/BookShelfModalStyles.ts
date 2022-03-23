import { styled } from "../../../../stitches.config";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const ModalTrigger = styled(AlertDialog.Trigger, {
  backgroundColor: "transparent",
  borderLeft: "1px solid $lilac100",

  ".myShelf": {
    fontSize: "1.3em",
    lineHeight: "60px",
    padding: "0px 20px",
    transition: ".2s",

    "&:hover": {
      color: "$purple100",
    },
  },

  "&:focus": {
    outline: "2px solid transparent",
  },

  "@max768px": {
    borderLeft: "0px",
    borderTop: "1px solid $lilac100",
  },
});

export const ModalOverlay = styled(AlertDialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "#00000040",
  zIndex: 2,
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
  backgroundColor: "white",
  borderRadius: "1.5em",
  padding: "25px",
  zIndex: 2,
  flexCenterJC: "space-around",
  flexDirection: "column",
  fontSize: "1.25em",
  textAlign: "center",

  "&:focus": {
    outline: "none",
  },
});

export const ModalTitle = styled(AlertDialog.Title, {
  color: "$purple500",
});

export const ModalDescription = styled(AlertDialog.Description, {
  color: "$purple200",
});

export const ModalCancel = styled(AlertDialog.Cancel, {
  position: "absolute",
  top: 0,
  right: 0,
  margin: "25px",
  backgroundColor: "transparent",
  color: "$purple500",
  transition: ".2s",
  fontSize: "0.8em",

  "&:hover": {
    color: "$lilac100",
  },
});

export const ModalAction = styled(AlertDialog.Action, {
  padding: "10px 25px",
  borderRadius: "2rem",
  backgroundColor: "$lilac100",
  color: "$white500",
  flexCenterJC: "",
  gap: "10px",
  transition: ".2s",
  fontSize: "0.9em",

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
