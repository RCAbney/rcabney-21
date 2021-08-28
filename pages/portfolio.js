import Layout from "../components/layout";
import Head from "next/head";
import PortfolioList from "../components/portfolioList";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function PortfolioPage({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Ryan Abney | Developer - Portfolio</title>
      </Head>
      <Layout>
        <div className="intro">
          <h1>Portfolio</h1>
        </div>
        <PortfolioList works={allPostsData} />
      </Layout>
    </>
  );
}
