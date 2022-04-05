import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "../store/reducer";
import { Header } from "../components/Header/Header";
import { globalStyles } from "../../styles/globalStyles";
import { GoUpArrow } from "../components/GoUpArrow/GoUpArrow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

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

      <GoUpArrow />

      <Component {...pageProps} />

      <div className="devBy">
        <Link href="https://github.com/isabdch">
          <a target="_blank">developed by isabdch</a>
        </Link>
      </div>
    </Provider>
  );
}

export default MyApp;
