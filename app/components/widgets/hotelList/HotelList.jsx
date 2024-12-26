import styles from "./HotelList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { hotels } from "@/lib/dummy_data";
import Link from "next/link";
import HotelCard from "./HotelCard";

export default function HotelList({
  titlePart1,
  highLightSpan,
  highLightStyle,
  titlePart2,
  pageLink,
  data = hotels,
  sliceNumber,
}) {
  return (
    <div className={styles.hotels}>
      <div className={styles.header}>
        <h2>
          {titlePart1} <span style={highLightStyle}>{highLightSpan}</span>
          {titlePart2}
        </h2>
        <Link href={pageLink}>
          All <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className={styles.hotels_wrapper}>
        {data.slice(0, sliceNumber).map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
}
