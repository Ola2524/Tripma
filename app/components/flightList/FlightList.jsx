import { flights } from "@/lib/dummy_data";
import styles from "./FlightList.module.css";
import Link from "next/link";
import FlightItem from "./FlightItem";

export default function Filter() {
  return (
    <div className={styles.flight_list}>
      <h4>
        Choose a <span>departing</span> flight
      </h4>
      <table>
        <tbody>
          {flights.map((flight) => (
            <FlightItem key={flight.id} flight={flight} />
          ))}
        </tbody>
      </table>
      <div className={styles.show_all_btn}>
        <Link href="">Show all flights</Link>
      </div>
      <img src="/images/Map.png" alt="map" />
    </div>
  );
}
