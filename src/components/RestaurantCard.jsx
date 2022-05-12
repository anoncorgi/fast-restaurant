import * as styles from "./RestaurantCard.module.css";

function RestaurantCard({
  name,
  imageUrl,
  averageRating,
  numOfReviews,
  cuisine,
  neighborhood,
  priceRange,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        {/* Use different service to get images, since the OpenTable API always returns the same placeholder */}
        <embed src="https://img-placeholder.herokuapp.com/restaurant?w=200&h=200&fit=crop" />
      </div>
      <div className={styles.details}>
        <h2>{name}</h2>
        <p>{averageRating} ⭐️⭐️⭐️★★ ({numOfReviews} reviews)</p>
        <p>
          {cuisine}
          {" "}|{" "}
          {neighborhood}
          {" "}|{" "}
          {priceRange}
        </p>
      </div>
    </div>
  );
}

export { RestaurantCard };
