import Link from 'next/link'
import Image from 'next/image'
import WorkTags from './workTags'

export default function PortfolioItemCard({ image, title, tags, slug }) {
    return (
        <div className="card">
        <Link href={`/portfolio/${slug}`}>
            <a>
          <Image src={image} className="folio-image" alt={title} width={1000} height={1000} layout="intrinsic" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkOLFtKQAEcwIl4CFSHgAAAABJRU5ErkJggg==" />
            </a>
        </Link>
        <div className="folio-details">
          <h2 className="folio-headline">
            <Link href={`/portfolio/${slug}`}>
              <a className="folio-link" >{title}</a>
            </Link>
          </h2>
        </div>
        {tags && <WorkTags tags={tags} />}
      </div>
    )
}