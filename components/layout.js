import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Ryan Abney | Front-end Developer - Currently makin' cool stuff out of pixels for Lessonly"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="site-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
