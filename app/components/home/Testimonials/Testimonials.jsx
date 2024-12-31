"use client";
import styles from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
// import { cities, countries, reviews } from "@/lib/dummy_data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`/api/reviews`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
      // finally {
      //   setDataLoaded(true);
      // }
    }
    fetchReviews();
  }, []);

  function formattedStartDate(date) {
    if (!date) return null;
    const parsedDate = new Date(date);
    console.log("Parsed date:", parsedDate);
    return parsedDate.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className={styles.testimonials}>
      <h2>
        What <span>Tripma</span> users are saying
        <div className={styles.reviews_wrapper}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.review_card}>
              <Image
                src={`/images/${review.img}`}
                alt={`${review.user_name}'s review`}
                width={100}
                height={100}
              />
              <div className={styles.content}>
                <h4>{review.user_name}</h4>
                <p>
                  {review.city_name}, {review.country_name} |{" "}
                  {formattedStartDate(review.date)}
                </p>
                <div className={styles.rate}>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={i < review.rate ? faStar : faStarOutline}
                    />
                  ))}
                </div>
                <p>
                  {review.message} <Link href="#">read more</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </h2>
    </div>
  );
}
