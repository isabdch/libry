import { keyframes, styled } from "../../../stitches.config";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const BooksSectionComponent = styled("section", {
  width: "100%",
  marginTop: "5vh",
  padding: "0px 20px",
  flexCenterAI: "",
});

export const BooksSectionContainer = styled("div", {
  borderTop: "1px solid $headerColor",
  flexCenterAI: "",
  flexWrap: "wrap",

  ".nothingFoundMsg": {
    margin: "30vh 40.5vw",
    color: "$mediumDarkColor",
    width: "200px",
    textAlign: "center",

    "@min1440px": {
      fontSize: "1vw",
    },
  },
});

export const BookCard = styled(AlertDialog.Trigger, {
  width: "210px",
  backgroundColor: "$headerColor",
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
    position: "relative",
    borderRadius: "0.5em",

    img: {
      borderRadius: "0.5em",
    },
  },

  h1: {
    color: "$darkerColor",
    fontSize: "1.3em",
    marginBottom: "auto",
  },

  "&:focus": {
    outlineColor: "$darkerColor",
  },

  "@min1440px": {
    width: "13vw",
    padding: "1vw",
    margin: "1vw 0.5vw",
    fontSize: "1vw",
    gap: "1vw",

    ".img": {
      height: "25vh",
      width: "11vw",

      img: {
        borderRadius: "0.5em",
      },
    },
  },
});

export const BookModalOverlay = styled(AlertDialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "$overlayBackgroundColor",
  zIndex: 2,

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

export const BookModalContent = styled(AlertDialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  maxHeight: "85vh",
  backgroundColor: "$inputBackgroundColor",
  boxShadow: "-1px 1px 10px $shadowColor",
  color: "$darkerColor",
  borderRadius: "1.5em",
  zIndex: 2,
  flexCenterJC: "center",
  gap: "20px",
  padding: "20px",

  "&:focus": {
    outline: "none",
  },

  ".info": {
    height: "55vh",
    flexCenterJC: "center",
    flexDirection: "column",
    gap: "20px",

    ".img": {
      position: "relative",
      height: "220px",
      width: "170px",
      borderRadius: "0.5em",
      boxShadow: "0px 1px 5px $shadowColor",

      img: {
        borderRadius: "0.5em",
      },
    },

    ".infoContent": {
      textAlign: "center",

      "p:first-child": {
        fontWeight: "bold",
      },
    },
  },

  ".content": {
    height: "51vh",
    width: "70%",
    flexCenterJC: "space-between",
    flexDirection: "column",
    gap: "3vh",
  },

  "@min1440px": {
    gap: "2vw",
    padding: "1vw 3vw",
    fontSize: "1vw",

    ".info": {
      gap: "1.5vw",

      ".img": {
        height: "30vh",
        width: "12vw",
      },
    },
  },

  "@max1024px": {
    width: "80vw",
  },

  "@max650px": {
    width: "90vw",
    maxHeight: "95vh",
    flexDirection: "column",
    justifyContent: "",
    color: "$darkerColor",
    gap: "0px",

    ".info": {
      height: "50vh",

      ".img": {
        height: "180px",
        width: "130px",
      },
    },

    ".content": {
      height: "38vh",
      width: "90%",
    },
  },

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

export const BookModalTitle = styled(AlertDialog.Title, {
  "@max650px": {
    textAlign: "center",
  },
});

export const BookModalDescription = styled(AlertDialog.Description, {
  overflowY: "auto",
  paddingRight: "5px",
  height: "100%",
  scrollbarWidth: "thin",
  scrollbarColor: "#7161EF #FFFFFF",

  "&::-webkit-scrollbar": {
    width: "0.5vw",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$vibrantColor",
    borderRadius: "2em",
  },

  "@max650px": {
    textAlign: "center",
  },
});

export const BookModalCancel = styled(AlertDialog.Cancel, {
  position: "absolute",
  top: 0,
  right: 0,
  margin: "18px",
  backgroundColor: "transparent",
  color: "$darkerColor",
  transition: ".2s",
  fontSize: "1em",

  "&:hover": {
    color: "$mediumDarkColor",
  },

  "&:focus": {
    outlineColor: "$darkerColor",
  },

  "@min1440px": {
    margin: "1.5vw",
  },
});

export const BookModalAction = styled(AlertDialog.Action, {
  backgroundColor: "transparent",
});
