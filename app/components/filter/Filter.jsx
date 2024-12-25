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
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

export default function Filter({
  fromPlace = "",
  toPlace = "",
  adults = 1,
  minors = 0,
  startDateParam,
  endDateParam,
  setBookings = null,
  setSelectedFlightID = null,
}) {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [adultsNum, setAdultsNum] = useState(adults);
  const [minorsNum, setMinorsNum] = useState(minors);
  const [tripType, setTripType] = useState("round_trip");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [formattedStartDate, setFormattedStartDate] = useState(null);
  const changeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  useEffect(() => {
    setFrom(fromPlace);
    setTo(toPlace);
    setAdultsNum(adults);
    setMinorsNum(minors);
    setStartDate((startDateParam) =>
      startDateParam ? new Date(startDateParam) : null
    );
    setEndDate((endDateParam) =>
      endDateParam ? new Date(endDateParam) : null
    );
  }, [fromPlace, toPlace, adults, minors, startDateParam, endDateParam]);

  const formattedStartDate = startDate
    ? startDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : null;

  const formattedEndDate = endDate
    ? endDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : null;

  const [openDatePopup, setOpenDatePopup] = useState(false);
  const [openPassengerNumberPopup, setOpenPassengerNumberPopup] =
    useState(false);

  function toggleDate() {
    setOpenDatePopup((prevOpenDatePopup) => !prevOpenDatePopup);
    setOpenPassengerNumberPopup(false);
  }

  function togglePassengerPopup() {
    setOpenPassengerNumberPopup((prevOpen) => !prevOpen);
    setOpenDatePopup(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (setBookings) {
      setBookings((booking) => []);
    }

    if (setSelectedFlightID) {
      setSelectedFlightID(null);
    }

    setOpenDatePopup(false);
    setOpenPassengerNumberPopup(false);
    const params = {
      from: from,
      to: to,
      adults: adultsNum,
      minors: minorsNum,
      "start-date": formattedStartDate,
      "trip-type": tripType,
    };

    if (tripType === "round_trip") {
      params["end-date"] = formattedEndDate;
    }

    const queryString = new URLSearchParams(params).toString();
    router.push(`/flights?${queryString}`);
  }

  return (
    <div className={styles.filter}>
      <form onSubmit={handleSubmit} className={styles.filter_form}>
        <div className={styles.place_field}>
          <label htmlFor="from">
            <FontAwesomeIcon icon={faPlaneDeparture} />
          </label>
          <select
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            id="from"
          >
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
          <select
            name="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            id="to"
          >
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
              {startDate ? formattedStartDate : "Departure"}-
              {endDate ? formattedEndDate : "Return"}
            </span>
          ) : (
            <span>{startDate ? formattedStartDate : "Departure"}</span>
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
              <Button action={toggleDate} type="button">
                Done
              </Button>
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
                  dateFormat="MMM d"
                  inline
                />
              ) : (
                <DatePicker
                  onChange={changeDate}
                  minDate={new Date()}
                  selected={startDate}
                  selectsRange
                  dateFormat="MMM d"
                  inline
                />
              )}
            </div>
          </div>
        )}
        <div style={{ position: "relative" }}>
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
                <button
                  type="button"
                  onClick={() =>
                    adultsNum > 1 && setAdultsNum((num) => parseInt(num) - 1)
                  }
                >
                  -
                </button>
                <span>{adultsNum}</span>
                <button
                  type="button"
                  onClick={() => setAdultsNum((num) => parseInt(num) + 1)}
                >
                  +
                </button>
              </div>
              <div>
                <span>Minors:</span>
                <button
                  type="button"
                  onClick={() =>
                    minorsNum > 0 && setMinorsNum((num) => parseInt(num) - 1)
                  }
                >
                  -
                </button>
                <span>{minorsNum}</span>
                <button
                  type="button"
                  onClick={() => setMinorsNum((num) => parseInt(num) + 1)}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
        <Button type="submit" className={styles.search}>
          Search
        </Button>
      </form>
    </div>
  );
}
