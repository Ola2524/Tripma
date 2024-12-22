"use client";

import styles from "./CookieBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CookieBox() {
  const [showCookiesBox, setShowCookiesBox] = useState(true);

  return (
    showCookiesBox && (
      <div className={styles.cookiebox}>
        <button
          className={styles.close_btn}
          type="button"
          onClick={() => setShowCookiesBox(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p>
          By using our site, you
          <br />
          agree to eat our cookies.
        </p>
        <div className={styles.option_btns}>
          <button className={styles.accept_btn}>Accept cookies</button>
          <button className={styles.setting_btn}>Go to settings</button>
        </div>
      </div>
    )
  );
}
