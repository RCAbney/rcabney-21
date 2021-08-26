import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Link from 'next/link'

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function PortfolioPage({ postData }) {
    return (
        <Layout>
            <article className="post">
                <h1>{postData.title}</h1>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
                <Link href="/"><a>Back to the front!</a></Link>
            </article>
        </Layout>
    )
}