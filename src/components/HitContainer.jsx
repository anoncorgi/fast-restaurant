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
        <li>
          {h.name}
        </li>
      ))}
    </ol>
  );
}

export { HitContainer };
