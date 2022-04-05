import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  "@font-face": [
    {
      src: "url('./font/Nunito-Regular.ttf')",
      fontFamily: "myFont",
    },
    {
      src: "url('./font/Comfortaa-VariableFont_wght.ttf')",
      fontFamily: "logoFont",
    },
  ],

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "myFont",
  },

  html: {
    "@max1080px": {
      fontSize: "93.75%",
    },

    "@max720px": {
      fontSize: "87.5%",
    },

    scrollBehavior: "smooth",
  },

  body: {
    background: "$lilac50 no-repeat fixed center",
    backgroundSize: "cover",
    overflowX: "hidden",

    "@max1024px": {
      background:
        "$lilac50 url('./images/wallpaper.svg') no-repeat fixed center",
      backgroundSize: "cover",
    },
  },

  button: {
    border: 0,
    cursor: "pointer",
  },

  input: {
    border: 0,
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  li: {
    listStyleType: "none",
  },

  ".Toastify__toast-container": {
    position: "fixed",
    width: "30vw",
    top: 0,
    zIndex: 9999,
    margin: "25px",
    flexCenterJC: "center",
    flexDirection: "column",
    gap: "30px",

    "@min1440px": {
      fontSize: "1vw",
    },

    "@max1024px": {
      width: "45vw",
    },

    "@max768px": {
      width: "75vw",
    },
  },

  ".Toastify__toast": {
    width: "100%",
    backgroundColor: "$white500",
    color: "$purple200",
    padding: "10px 20px",
    flexCenterJC: "center",
    cursor: "pointer",
    borderRadius: "1em",
  },

  ".Toastify__toast-theme--colored.Toastify__toast--success": {
    backgroundColor: "$purple200",
    color: "$white500",
  },

  ".Toastify__toast-theme--colored.Toastify__toast--error": {
    backgroundColor: "$purple200",
    color: "$white500",
  },

  ".Toastify__toast-theme--colored.Toastify__toast--warning": {
    backgroundColor: "$purple200",
    color: "$white500",
  },

  ".Toastify__toast-theme--colored.Toastify__toast--info": {
    backgroundColor: "$purple200",
    color: "$white500",
  },

  ".devBy": {
    textAlign: "center",
    width: "100%",
    fontSize: "0.75em",
    color: "$purple100",
    position: "fixed",
    bottom: 0,
    opacity: "0.5",
    transition: ".2s",

    "&:hover": {
      opacity: 1,
      transform: "scale(1.1)",
    },
  },
});
