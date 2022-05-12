import * as Algolia from "react-instantsearch-hooks";
import { RestaurantCard } from "./RestaurantCard";

import cn from "classnames";

// "Hits" are the results that match the query
function HitContainer({ onDeleteRestaurant }) {
  const {
    hits,
    // isFirstPage,
    isLastPage,
    showMore,
    // showPrevious,
  } = Algolia.useInfiniteHits();

  const noResults = hits.length === 0;

  if (noResults) {
    return (
      <div style={{ margin: "5rem", width: "33rem", lineHeight: "1.5" }}>
        <p>We searched high and low, but couldn&apos;t find any restaurant that matched your query.</p>
        <img style={{ maxHeight: "20rem" }} src="/img/no_result.jpeg" />
      </div>
    );
  }

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
