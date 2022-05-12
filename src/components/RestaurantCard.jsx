import * as React from "react";
import { DeleteOutlined } from '@ant-design/icons';

import * as styles from "./RestaurantCard.module.css";

function DeleteOption({ onClick }) {
  const [delConfirmationActive, setDelConfirmation] = React.useState(false);
  const showDelConfirmation = () => setDelConfirmation(true);
  const hideDelConfirmation = () => setDelConfirmation(false);

  if (delConfirmationActive) {
    return (
      <span>
        <a href="" onClick={hideDelConfirmation}>Cancel</a>
        <button onClick={onClick}>Confirm Delete</button>
      </span>
    );
  }

  return (
    <DeleteOutlined onClick={showDelConfirmation} />
  );
}

function RestaurantCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <RestaurantStockImage />
      </div>
      <div className={styles.rating}>
        <span>
          {props.averageRating} stars
          {" "}
          ({props.numOfReviews} reviews)
        </span>
      </div>
      <div className={styles.restaurantInfo}>
        <p><strong>{props.name}</strong></p>
        <p>{props.address}</p>
        <p>{props.phone}</p>
      </div>
      <div className={styles.restaurantMetadata}>
        <span className={styles.pill}>
          {props.cuisine}
        </span>
        {props.isFancy && <span>🧐</span>}
        <span className={styles.priceRange}>
          {props.priceRange}
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
