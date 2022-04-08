import "react-toastify/dist/ReactToastify.css";
import { ToastComponent } from "./ToastStyles";

export function Toast() {
  return (
    <ToastComponent
      position="top-left"
      autoClose={2500}
      hideProgressBar
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      limit={3}
      theme="colored"
    />
  );
}
