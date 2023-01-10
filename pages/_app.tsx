import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";

nProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <Component {...pageProps} />
      {/* <div className="absolute top-0 h-32 w-full bg-gradient-to-r from-green-200 via-blue-500 to-violet-300 blur-2xl opacity-30"></div> */}
    </ThemeProvider>
  );
}
