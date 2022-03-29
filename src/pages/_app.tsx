import { SessionProvider as AuthProvider } from "next-auth/react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { allReducers } from "../store/reducer";
import { Header } from "../components/Header/Header";
import { globalStyles } from "../../styles/globalStyles";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  globalStyles();

  const store = createStore(allReducers, applyMiddleware(thunk));

  // store.subscribe(() => {
  //   console.log(store.getState().toRead);
  //   console.log(store.getState().reading);
  //   console.log(store.getState().read);
  // });

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
