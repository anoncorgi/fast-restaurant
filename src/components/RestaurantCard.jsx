import styles from "./RestaurantCard.module.css";

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
        <img src={imageUrl} />
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
