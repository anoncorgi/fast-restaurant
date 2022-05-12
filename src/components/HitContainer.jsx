import * as Algolia from "react-instantsearch-hooks";
import { RestaurantCard } from "./RestaurantCard";

import cn from "classnames";

// "Hits" are the results that match the query
function HitContainer({ onDeleteRestaurant }) {
  const {
    hits,
    isLastPage,
    showMore,
  } = Algolia.useInfiniteHits();

  return (
    <>
      {hits.map((h) => (
        <RestaurantCard
          key={h.objectID}
          name={h.name}
          imageUrl={h.image_url}
          averageRating={h.stars_count}
          numOfReviews={h.reviews_count}
          cuisine={h.food_type}
          address={h.address}
          isFancy={h.dining_style === "Fine Dining"}
          phone={h.phone_number}
          priceRange={h.price_range}
          onDelete={onDeleteRestaurant}
        />
      ))}
      <button
        className={cn('ais-InfiniteHits-loadMore', {
          'ais-InfiniteHits-loadMore--disabled': isLastPage
        })}
        onClick={showMore}
        disabled={isLastPage}
      >
        Show more results
      </button>

    </>
  );
}

export { HitContainer };
