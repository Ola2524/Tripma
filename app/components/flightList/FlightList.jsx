"use client";

import styles from "./FlightList.module.css";
import Link from "next/link";
import FlightItem from "./FlightItem";
import { useState } from "react";
import Button from "../ui/button/Button";

export default function Filter({
  flights,
  from,
  to,
  setSelectedFlight,
  tripType,
  tripsNum,
}) {
  return (
    <div className={styles.flight_list}>
      {tripType == "round_trip" && tripsNum >= 1 ? (
        <h4>
          Choose a <span>returning</span> flight
        </h4>
      ) : (
        <h4>
          Choose a <span>departing</span> flight
        </h4>
      )}
      <table>
        <tbody>
          {flights.map((flight) => (
            <FlightItem
              key={flight.id}
              flight={flight}
              setSelectedFlight={setSelectedFlight}
            />
          ))}
        </tbody>
      </table>
      <div className={styles.show_all}>
        <Button className={styles.show_all_btn} type="button">
          Show all flights
        </Button>
      </div>
      <div className={styles.map}>
        <span className={styles.from}>{from}</span>
        <span className={styles.to}>{to}</span>
      </div>
    </div>
  );
}
