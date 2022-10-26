import Link from "next/link";
import Image from "next/image";
import WorkTags from "./workTags";

export default function PortfolioItemCard({ image, title, tags, slug }) {
  return (
    <div className="card">
      <Link href={`/portfolio/${slug}`} passHref>
        <Image
          src={image}
          className="folio-image"
          alt={title}
          width={1000}
          height={1000}
          layout="intrinsic"
        />
      </Link>
      <div className="folio-details">
        <h2 className="folio-headline">
          <Link href={`/portfolio/${slug}`} className="folio-link">
            {title}
          </Link>
        </h2>
      </div>
      {tags && <WorkTags tags={tags} />}
    </div>
  );
}
