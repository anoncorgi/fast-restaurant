import * as React from "react";
import { DeleteTwoTone } from '@ant-design/icons';

import * as styles from "./RestaurantCard.module.css";

function RestaurantCard({ onDelete, ...h }) {

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <RestaurantStockImage />
      </div>
      <div className={styles.rating}>
        <span>
          {h.averageRating} stars
          {" "}
          ({h.numOfReviews} reviews)
        </span>
      </div>
      <div className={styles.restaurantInfo}>
        <div className={styles.restaurantName}>
          <strong>{h.name}</strong>
          <DeleteTwoTone onClick={() => onDelete(h.name, h.id)} />
        </div>
        <p>{h.address}</p>
        <p>{h.phone}</p>
      </div>
      <div className={styles.restaurantMetadata}>
        <span className={styles.pill}>
          {h.cuisine}
        </span>
        {h.isFancy && <h1 title="This location is fancy">🧐</h1>}
        <span className={styles.priceRange}>
          {h.priceRange}
        </span>
      </div>
    </div>
  );
}

function RestaurantStockImage() {
  function getRandomImg() {
    const id = Math.round(Math.random() * 20);
    return `/img/rest_${id}.jpeg`;
  }
  return (
    <img src={getRandomImg()} />
  );
}

export { RestaurantCard };
