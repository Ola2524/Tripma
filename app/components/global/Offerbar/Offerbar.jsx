"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Offerbar.module.css";

export default function OfferBar() {
  const [showOfferBar, setShowOfferBar] = useState(true);
  return (
    showOfferBar && (
      <div className={styles.offer_bar}>
        <p>
          Join Tripma today and save up to 20% on your flight using code TRAVEL
          at checkout. Promotion valid for new users only.
        </p>
        <button className={styles.close_btn} type="button" onClick={()=>setShowOfferBar(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    )
  );
}
