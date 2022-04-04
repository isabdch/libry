import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "../store/reducer";
import { Header } from "../components/Header/Header";
import { ToastContainer } from "react-toastify";
import { globalStyles } from "../../styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  globalStyles();

  const store = createStore(allReducers);

  return (
    <Provider store={store}>
      <Header />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        limit={6}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
