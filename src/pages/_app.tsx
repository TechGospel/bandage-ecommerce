import Layout from "@/layouts";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../utils/theme";
import { GlobalStyles } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Bandage</title>
        <meta name="title" content="Bandage" />
        <meta
          name="description"
          content="Bandage is a Pan-African technology company that is built around a marketplace, logistics service and payment service. The logistics service enables the delivery of packages through a network of local partners while the payment services facilitate the payments of online transactions within Bandage’s ecosystem."
        />
        <meta name="keywords" content="ecommerce, online, shopping" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles
              styles={{
                "*": {
                  margin: 0,
                  padding: 0,
                  boxSizing: "border-box",
                },
                a: {
                  textDecoration: "none",
                },
              }}
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ToastContainer />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Fragment>
  );
}