import Layout from '../components/layout'
import PortfolioList from '../components/portfolioList'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout>

      <div className="intro">
        <h1 className="intro-title">
          Ryan Abney,
          <br />
          Front-End Developer and Designer
        </h1>
      </div>
      <PortfolioList works={allPostsData} />

    </Layout>
  )
}
