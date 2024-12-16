import styles from "./PlacesToStay.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { hotels } from "@/dummy_data";

export default function FlightDeals() {
  return (
    <div className={styles.places}>
      <div className={styles.header}>
        <h2>
          Explore unique <span>places to stay</span>
        </h2>
        <Link href="hotels">
          All <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className={styles.hotels_wrapper}>
        {hotels.slice(0, 3).map((hotel) => (
          <div className={styles.hotel_card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url('/images/${hotel.img}')` }}
            ></div>
            <div className={styles.content}>
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.explore_btn}>
        <Link href="#">
          Explore more stays
        </Link>
      </div>
    </div>
  );
}
