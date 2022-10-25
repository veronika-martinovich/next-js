/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
