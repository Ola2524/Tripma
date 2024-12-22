import styles from "./HotelCards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { hotels } from "@/lib/dummy_data";
import Link from "next/link";

export default function HotelCards({
  titlePart1,
  highLightSpan,
  highLightStyle,
  titlePart2,
  pageLink,
  data = hotels,
  sliceNumber,
}) {
  return (
    <div className={styles.hotel_cards}>
      <div className={styles.header}>
        <h2>
          {titlePart1} <span style={highLightStyle}>{highLightSpan}</span> {titlePart2}
        </h2>
        <Link href={pageLink}>
          All <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className={styles.hotels_wrapper}>
        {data.slice(0, sliceNumber).map((hotel) => (
          <div key={hotel.id} className={styles.hotel_card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url('/images/${hotel.img}')` }}
            ></div>
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
