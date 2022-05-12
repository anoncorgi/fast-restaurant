import { useHits } from "react-instantsearch-hooks";

// "Hits" are the results that match the query
function HitContainer() {
  const { hits } = useHits();
  const noResults = hits.length === 0;
  if (noResults) {
    return (
      <p>We searched high and low, but we could&apos;nt find any restaurant that matched your query.</p>
    );
  }
  return (
    <ol>
      {hits.map(h => (
        <li key={h.objectID}>
          <h2>{h.name}</h2>
          <div>
            <img src={h.image_url} />
            <p>{h.stars_count} ⭐️⭐️⭐️★★ ({h.reviews_count} reviews)</p>
          </div>
          <div>
            {h.food_type}
            {" "}|{" "}
            {h.neighborhood}
            {" "}|{" "}
            {h.price_range}
          </div>
        </li>
      ))}
    </ol>
  );
}

export { HitContainer };
