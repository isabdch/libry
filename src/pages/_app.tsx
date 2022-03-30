import { SessionProvider as AuthProvider } from "next-auth/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "../store/reducer";
import { Header } from "../components/Header/Header";
import { globalStyles } from "../../styles/globalStyles";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  globalStyles();

  const store = createStore(allReducers);

  return (
    <Provider store={store}>
      <AuthProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
