import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const { base64, img } = await getPlaiceholder(postData.image);
  return {
    props: {
      postData,
      imgProps: {
        ...img,
        blurDataURL: base64,
      },
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

export default function PortfolioPage({ postData, imgProps }) {
  return (
    <>
      <Head>
        <title>Ryan Abney | Developer - {postData.title}</title>
      </Head>
      <Layout>
        <article className="post">
          <h1>{postData.title}</h1>

          <Image {...imgProps} placeholder="blur" alt={postData.title} />

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <Link href="/">
            <a>Back to the front!</a>
          </Link>
        </article>
      </Layout>
    </>
  );
}
