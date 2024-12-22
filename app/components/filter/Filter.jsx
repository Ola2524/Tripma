"use client";
import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/app/components/ui/button/Button";
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Filter() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const changeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const [openDatePopup, setOpenDatePopup] = useState(false);
  const [openPassengerNumberPopup, setOpenPassengerNumberPopup] =
    useState(false);
  const [adultsNum, setAdultsNum] = useState(1);
  const [minorsNum, setMinorsNum] = useState(0);
  const [tripType, setTripType] = useState("round_trip");

  function toggleDate() {
    setOpenDatePopup((prevOpenDatePopup) => !prevOpenDatePopup);
    setOpenPassengerNumberPopup(false);
  }

  function togglePassengerPopup() {
    setOpenPassengerNumberPopup((prevOpen) => !prevOpen);
    setOpenDatePopup(false);
  }

  function decreaseAdultNumber() {
    if (adultsNum > 1) {
      setAdultsNum((num) => num - 1);
    }
  }

  function increaseAdultNumber() {
    setAdultsNum((num) => num + 1);
  }

  function decreaseMinorNumber() {
    if (minorsNum > 0) {
      setMinorsNum((num) => num - 1);
    }
  }

  function increaseMinorNumber() {
    setMinorsNum((num) => num + 1);
  }

  return (
    <div className={styles.filter}>
      <form className={styles.filter_form} style={{ justifyContent: "start" }}>
        <div className={styles.place_field}>
          <label htmlFor="from">
            <FontAwesomeIcon icon={faPlaneDeparture} />
          </label>
          <select name="from" id="from" defaultValue="">
            <option value="" disabled>
              From Where?
            </option>
            <option value="SFO">SFO</option>
            <option value="ATL">ATL</option>
            <option value="LAX">LAX</option>
          </select>
        </div>
        <div className={styles.place_field}>
          <label htmlFor="to">
            <FontAwesomeIcon icon={faPlaneArrival} />
          </label>
          <select name="to" id="to" defaultValue="">
            <option value="" disabled>
              Where to?
            </option>
            <option value="SFO">SFO</option>
            <option value="ATL">ATL</option>
            <option value="LAX">LAX</option>
          </select>
        </div>
        <button className={styles.date} onClick={toggleDate} type="button">
          <FontAwesomeIcon icon={faCalendar} />
          {tripType === "round_trip" ? (
            <span>
              {startDate
                ? startDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : "Departure"}
              -
              {endDate
                ? endDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : "Return"}
            </span>
          ) : (
            <span>
              {startDate
                ? startDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : "Departure"}
            </span>
          )}
        </button>
        {openDatePopup && (
          <div className={styles.datePopup}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "24px 24px 20px",
              }}
            >
              <input
                type="radio"
                name="trip_type"
                value="round_trip"
                checked={tripType === "round_trip"}
                onChange={() => setTripType("round_trip")}
                id="Round trip"
                selected
              />
              <label htmlFor="Round trip">Round trip</label>

              <input
                type="radio"
                name="trip_type"
                value="one_way"
                checked={tripType === "one_way"}
                onChange={() => setTripType("one_way")}
                id="One way"
              />
              <label htmlFor="One way">One way</label>
              <div className={styles.place_field}>
                <FontAwesomeIcon icon={faCalendar} />
                {tripType == "round_trip" ? (
                  <DatePicker
                    className={styles.dateField}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={changeDate}
                    dateFormat="MMM d"
                  />
                ) : (
                  <DatePicker
                    className={styles.dateField}
                    selected={startDate}
                    onChange={(date) => changeDate([date, null])}
                    dateFormat="MMM d"
                  />
                )}
              </div>
              <Button action={toggleDate} type="button">Done</Button>
            </div>
            <div className={styles.calender_container}>
              {tripType == "round_trip" ? (
                <DatePicker
                  onChange={changeDate}
                  minDate={new Date()}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  monthsShown={2}
                  inline
                />
              ) : (
                <DatePicker
                  onChange={changeDate}
                  minDate={new Date()}
                  selected={startDate}
                  selectsRange
                  inline
                />
              )}
            </div>
          </div>
        )}
        <button
          className={styles.passenger_num}
          type="button"
          onClick={togglePassengerPopup}
        >
          <FontAwesomeIcon icon={faUser} />
          <span>{adultsNum} adult</span>
        </button>
        {openPassengerNumberPopup && (
          <div className={styles.passengersPopup}>
            <div>
              <span>Adults:</span>
              <button type="button" onClick={decreaseAdultNumber}>
                -
              </button>
              <span>{adultsNum}</span>
              <button type="button" onClick={increaseAdultNumber}>
                +
              </button>
            </div>
            <div>
              <span>Minors:</span>
              <button type="button" onClick={decreaseMinorNumber}>
                -
              </button>
              <span>{minorsNum}</span>
              <button type="button" onClick={increaseMinorNumber}>
                +
              </button>
            </div>
          </div>
        )}
        <Button type="submit" className={styles.search}>Search</Button>
      </form>
    </div>
  );
}
