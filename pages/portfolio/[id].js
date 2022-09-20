import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function PortfolioPage({ postData }) {
  return (
    <>
      <Head>
        <title>Ryan Abney | Developer - {postData.title}</title>
      </Head>
      <Layout>
        <article className="post">
          <h1>{postData.title}</h1>
          <Image
            src={postData.image}
            alt={postData.title}
            width={postData.imageWidth}
            height={postData.imageHeight}
          />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <Link href="/">
            <a>Back to the front!</a>
          </Link>
        </article>
      </Layout>
    </>
  );
}
