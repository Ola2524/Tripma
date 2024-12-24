import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function seat() {
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.flight_seats}></div>
      <div className={styles.booking_details}>
        <header>
          <div>
            <h4>SFO</h4>
            <p>California, US</p>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrow_icon} />
          <div>
            <h4>NRT</h4>
            <p>Tokyo, Japan</p>
          </div>
          <div className={styles.active_tab}>
            <h5>Feb 25 | 7:00AM</h5>
            <p>Departing</p>
          </div>
          <div>
            <h5>Mar 21 | 12:15PM</h5>
            <p>Arriving</p>
          </div>
        </header>
        <div className={styles.seat_classes}>
          <div className={styles.economy}>
            <Image
              src="/images/Economy Seats.png"
              alt="economy"
              width={320}
              height={180}
            />
            <div className={styles.content}>
              <h3 className={styles.selected}>Economy f<span>Selected</span></h3>
              <p>
                Rest and recharge during your flight with extended leg room,
                personalized service, and a multi-course meal service
              </p>
            </div>
          </div>
          <div className={styles.business}>
            <Image
              src="/images/Business Seats.png"
              alt="economy"
              width={320}
              height={180}
            />
            <div className={styles.content}>
              <h3>Business class</h3>
              <p>
                Rest and recharge during your flight with extended leg room,
                personalized service, and a multi-course meal service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
