import "../styles/globals.css";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { debounce } from "lodash";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const start = debounce(NProgress.start, 200);
    const end = () => {
      start.cancel();
      NProgress.done();
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
