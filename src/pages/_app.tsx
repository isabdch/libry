import { SessionProvider as AuthProvider } from "next-auth/react";
import { Header } from "../components/Header/Header";
import { globalStyles } from "../../styles/globalStyles";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  globalStyles();
  return (
    <AuthProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;