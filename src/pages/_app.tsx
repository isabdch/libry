import Link from "next/link";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "../store/reducer";
import { Header } from "../components/Header/Header";
import { globalStyles } from "../../styles/globalStyles";
import { GoUpArrow } from "../components/GoUpArrow/GoUpArrow";
import { darkModeTheme } from "../../stitches.config";
import { ThemeProvider } from "next-themes";
import { Toast } from "../components/Toast/Toast";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  globalStyles();

  const store = createStore(allReducers);

  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        value={{
          light: "light",
          dark: darkModeTheme.className,
        }}
      >
        <Header />

        <Toast />

        <GoUpArrow />

        <Component {...pageProps} />

        <div className="devBy">
          <Link href="https://github.com/isabdch">
            <a target="_blank">developed by isabdch</a>
          </Link>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
