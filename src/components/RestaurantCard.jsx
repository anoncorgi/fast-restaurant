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

function RestaurantCard({
  name,
  imageUrl,
  averageRating,
  numOfReviews,
  cuisine,
  neighborhood,
  priceRange,
}) {
  function deleteRestaurant() {
    alert('hi');
  }

  function getRandomImg() {
    const id = Math.round(Math.random() * 20);
    return `/img/rest_${id}.jpeg`;
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={getRandomImg()} />
      </div>
      <div className={styles.details}>
        <DeleteOption onClick={deleteRestaurant} />
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
