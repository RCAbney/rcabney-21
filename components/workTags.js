export default function WorkTags({tags}) {
    return (
        <ul className="folio-tags">
            {tags.map(tag => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
    )
}