import * as Algolia from "react-instantsearch-hooks";
import { RestaurantCard } from "./RestaurantCard";

// "Hits" are the results that match the query
function HitContainer() {
  const { hits } = Algolia.useHits();
  const noResults = hits.length === 0;
  if (noResults) {
    return (
      <p>We searched high and low, but we could&apos;nt find any restaurant that matched your query.</p>
    );
  }
  return (
    <div>
      {hits.map(h => (
        <RestaurantCard
          key={h.objectID}
          name={h.name}
          imageUrl={h.image_url}
          averageRating={h.stars_count}
          numOfReviews={h.reviews_count}
          cuisine={h.food_type}
          neighborhood={h.neighborhood}
          priceRange={h.price_range}
        />
      ))}
    </div>
  );
}

export { HitContainer };