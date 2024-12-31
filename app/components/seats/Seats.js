"use client";
import styles from "./Seats.module.css";
import React from "react";

export default function Seats({
  businessSeats,
  businessRowNum,
  economySeats,
  economyRowNum,
  selectedSeats,
  setSelectedSeats,
  exitDoors,
  setShowBusinessPopup,
}) {
  const toggleSeatSelection = (seat) => {
    if (seat.class == "business") {
      setShowBusinessPopup(true);
    } else {
      setSelectedSeats((prevSelectedSeats) => {
        const seatExists = prevSelectedSeats.some((s) => s.id === seat.id);
        if (seatExists) {
          return prevSelectedSeats.filter((s) => s.id !== seat.id);
        } else {
          return [...prevSelectedSeats, { ...seat, isSelected: true }];
        }
      });
    }
  };

  const isExitDoor = (seat) => {
    return exitDoors.some(
      (door) => door?.row === seat.x_coordinate && seat.y_coordinate === 1
    );
  };

  return (
    <div className={styles.seats}>
      <div className={styles.business_class}>
        {businessSeats.map((seat, index) => {
          const isRowNum = seat.y_coordinate == businessRowNum / 2 + 1;
          return isRowNum ? (
            <React.Fragment key={seat.id}>
              <div className={styles.rowNum}>{seat.x_coordinate}</div>
              <label
                className={`
            ${styles.seat} 
            ${selectedSeats.some((s) => s.id === seat.id) && styles.selected}
            ${seat.available && styles.available}
          `}
                onClick={() => toggleSeatSelection(seat)}
                htmlFor={seat.label}
              >
                <input
                  type="checkbox"
                  name="seat"
                  id={seat.id}
                  onChange={() => toggleSeatSelection(seat)}
                  checked={selectedSeats.some((s) => s.id === seat.id)}
                />
              </label>
            </React.Fragment>
          ) : (
            <React.Fragment key={seat.id}>
              {isExitDoor(seat) && (
                <div className={styles.exit_row}>
                  <img src="/images/information.svg" alt="info icon" />
                  <span>Exit row</span>
                </div>
              )}

              <label
                className={`
            ${styles.seat} 
            ${selectedSeats.some((s) => s.id === seat.id) && styles.selected}
            ${seat.available && styles.available}
          `}
                onClick={() => toggleSeatSelection(seat)}
                htmlFor={seat.label}
                key={seat.id}
              >
                <input
                  type="checkbox"
                  name="seat"
                  id={seat.id}
                  onChange={() => toggleSeatSelection(seat)}
                  checked={selectedSeats.some((s) => s.id === seat.id)}
                />
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles.economy_class}>
        {economySeats.map((seat, index) => {
          const isRowNum = seat.y_coordinate == economyRowNum / 2 + 1;

          return isRowNum ? (
            <React.Fragment key={seat.id}>
              <div className={styles.rowNum}>{seat.x_coordinate}</div>
              <label
                className={`
            ${styles.seat} 
            ${selectedSeats.some((s) => s.id === seat.id) && styles.selected}
            ${seat.available && styles.available}
          `}
                onClick={() => toggleSeatSelection(seat)}
                htmlFor={seat.label}
              >
                <input
                  type="checkbox"
                  name="seat"
                  id={seat.id}
                  onChange={() => toggleSeatSelection(seat)}
                  checked={selectedSeats.some((s) => s.id === seat.id)}
                />
              </label>
            </React.Fragment>
          ) : (
            <React.Fragment key={seat.id}>
              {isExitDoor(seat) && (
                <div className={styles.exit_row}>
                  <img src="/images/information.svg" alt="info icon" />
                  <span>Exit row</span>
                </div>
              )}
              <label
                className={`
            ${styles.seat}
            ${selectedSeats.some((s) => s.id === seat.id) && styles.selected}
            ${seat.available && styles.available}
          `}
                onClick={() => toggleSeatSelection(seat)}
                htmlFor={seat.label}
                key={seat.id}
              >
                <input
                  type="checkbox"
                  name="seat"
                  id={seat.id}
                  onChange={() => toggleSeatSelection(seat)}
                  checked={selectedSeats.some((s) => s.id === seat.id)}
                />
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
