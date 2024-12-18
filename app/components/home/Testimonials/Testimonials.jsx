import styles from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { cities, countries, reviews } from "@/lib/dummy_data";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <h2>
        What <span>Tripma</span> users are saying
        <div className={styles.reviews_wrapper}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.review_card}>
              <Image
                src={`/images/${review.img}`}
                alt={`${review.name}'s review`}
                width={100}
                height={100}
              />
              <div className={styles.content}>
                <h4>{review.name}</h4>
                <p>
                  {cities[index].name}, {countries[index.name]} | {review.date}
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
