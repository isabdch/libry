import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "../store/reducer";
import Link from "next/link";
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
        limit={3}
      />

      <Component {...pageProps} />

      <p className="devBy">
        developed by{" "}
        <Link href="https://github.com/isabdch">
          <a target="_blank">isabdch</a>
        </Link>{" "}
        - 2022
      </p>
    </Provider>
  );
}

export default MyApp;
