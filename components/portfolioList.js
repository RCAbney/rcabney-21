import PortfolioItemCard from "./portfolioItemCard"

export default function PortfolioList({ works }) {
    return (
        <div className="portfolio">
        {works.map((work, index) => (
          <PortfolioItemCard
            key={work.slug + index}
            title={work.title}
            image={work.image}
            tags={work.tags}
            slug={work.slug}
          />
        ))}
      </div>
    )
}