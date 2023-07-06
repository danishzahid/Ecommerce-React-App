import React, { useState, useEffect } from "react";
import styles from "./Review.module.css";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu pellentesque ligula.",
    photo:
      "https://media.licdn.com/dms/image/C5603AQHez4IA7i6dGA/profile-displayphoto-shrink_800_800/0/1592207162697?e=2147483647&v=beta&t=7XXT4qCV9FtgtDdxUBWy9E5zOvDKrilJj6UEAFA_v7A",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    review:
      "Vestibulum lacinia arcu in nisl rhoncus consequat. Quisque vel nunc libero.",
    photo:
      "https://media.licdn.com/dms/image/C5603AQHez4IA7i6dGA/profile-displayphoto-shrink_800_800/0/1592207162697?e=2147483647&v=beta&t=7XXT4qCV9FtgtDdxUBWy9E5zOvDKrilJj6UEAFA_v7A",
  },
  {
    id: 3,
    name: "David Johnson",
    rating: 3,
    review:
      "Integer nec mi ut justo gravida consectetur. Curabitur non mauris eget sem gravida venenatis.",
    photo:
      "https://media.licdn.com/dms/image/C5603AQHez4IA7i6dGA/profile-displayphoto-shrink_800_800/0/1592207162697?e=2147483647&v=beta&t=7XXT4qCV9FtgtDdxUBWy9E5zOvDKrilJj6UEAFA_v7A",
  },
  // Add more dummy review objects as needed
];

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
    }, 5000); // Change review every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderStars = (rating) => {
    const starSymbols = "★".repeat(rating) + "☆".repeat(5 - rating);
    return <span className={styles.stars}>{starSymbols}</span>;
  };

  return (
    <div className={styles.review}>
      <h2 className={styles.title}>Customer Reviews</h2>
      <div className={styles.reviewList}>
        {reviewsData.slice(currentReview, currentReview + 3).map((review) => (
          <div key={review.id} className={styles.reviewItem}>
            <div className={styles.photoContainer}>
              <img
                src={review.photo}
                alt={review.name}
                className={styles.photo}
              />
            </div>
            <div className={styles.reviewDetails}>
              <div className={styles.rating}>{renderStars(review.rating)}</div>
              <p className={styles.name}>{review.name}</p>
              <p className={styles.reviewText}>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
