import { styled } from "../../../stitches.config";
import { ToastContainer } from "react-toastify";

export const ToastComponent = styled(ToastContainer, {
  ".Toastify__toast": {
    width: "100%",
    backgroundColor: "$vibrantColor",
    color: "$white500",
    padding: "10px 20px",
    flexCenterJC: "center",
    cursor: "pointer",
    borderRadius: "1em",
  },

  ".Toastify__toast-theme--colored.Toastify__toast--success": {
    backgroundColor: "$vibrantColor",
    color: "$white500",
  },

  ".Toastify__toast-theme--colored.Toastify__toast--error": {
    backgroundColor: "$vibrantColor",
    color: "$white500",
  },

  ".Toastify__toast-theme--colored.Toastify__toast--warning": {
    backgroundColor: "$vibrantColor",
    color: "$white500",
  },

  ".Toastify__toast-theme--colored.Toastify__toast--info": {
    backgroundColor: "$vibrantColor",
    color: "$white500",
  },
});
