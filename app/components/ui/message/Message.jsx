"use client";

import { useState } from "react";
import styles from "./Message.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Message({ children, type, hasCloseBtn, style }) {
  const [showMessage, setShowMessage] = useState(true);

  return (
    showMessage && (
      <div
        className={`${styles.message} ${type === "error" && styles.error} ${
          type === "success" && styles.success
        }`}
        style={style}
      >
        <span>{children}</span>
        {hasCloseBtn && (
          <button
            className={styles.close_btn}
            type="button"
            onClick={() => setShowMessage(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
      </div>
    )
  );
}
