"use client";
import styles from "./HotelList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { hotels } from "@/lib/dummy_data";
import Link from "next/link";
import HotelCard from "./HotelCard";
import { useEffect, useState } from "react";

export default function HotelList({
  titlePart1,
  highLightSpan,
  highLightStyle,
  titlePart2,
  pageLink,
  data = hotels,
  sliceNumber,
}) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("/api/hotels");
        const response = data.json();
        setHotels(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
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
