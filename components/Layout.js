import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>Guitarland - {pagina}</title>
        <meta name="description" content="Comercio de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
