import styles from "./FlightDeals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { hotels } from "@/dummy_data";

export default function FlightDeals() {
  return (
    <div className={styles.flight_deals}>
      <div className={styles.header}>
        <h2>
          Find your next adventure with these <span>flight deals</span>
        </h2>
        <Link href="hotels">
          All <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className={styles.hotels_wrapper}>
        {hotels.map((hotel) => (
          <div className={styles.hotel_card}>
            <div className={styles.image} style={{ backgroundImage: `url('/images/${hotel.img}')` }}></div>
            <div className={styles.content}>
              <div className={styles.card_title}>
                <h3>{hotel.name}</h3>
                <span>{hotel.price}</span>
              </div>
              <p>{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
