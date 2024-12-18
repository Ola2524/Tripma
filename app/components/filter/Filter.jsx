"use client";
import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/app/components/button/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import dayjs from "dayjs";
import { useState, useRef } from "react";

export default function Filter() {
  const [value, setValue] = useState([null, null]);
  const [openDatePopup, setOpenDatePopup] = useState(false);
  const [openPassengerNumberPopup, setOpenPassengerNumberPopup] =
    useState(false);
  const [adultsNum, setAdultsNum] = useState(1);
  const [minorsNum, setMinorsNum] = useState(0);
  const round_trip = useRef(null);
  const one_way = useRef(null);

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

  const StyledButton = styled(IconButton)(({ theme }) => ({
    border: "none",
  }));
  const StyledDay = styled(PickersDay)(({ theme }) => ({
    "&.Mui-selected": {
      backgroundColor: "#605dec",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#605dec",
      color: "white",
    },
  }));

  return (
    <div className={styles.filter}>
      <form className={styles.filter_form}>
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
          <span>Departure - Return</span>
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
                ref={round_trip}
                id="Round trip"
              />
              <label htmlFor="Round trip">Round trip</label>

              <input type="radio" name="trip_type" ref={one_way} id="One way" />
              <label htmlFor="One way">One way</label>
              <div className={styles.place_field}>
                <FontAwesomeIcon icon={faCalendar} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateRangePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    open={openDatePopup}
                    localeText={{ start: "Departure - Return" }}
                    slots={{
                      field: SingleInputDateRangeField,
                      openPickerButton: StyledButton,
                      day: StyledDay,
                    }}
                    minDate={dayjs()}
                    name="allowedRange"
                  />
                </LocalizationProvider>
              </div>
              <Button text="Done" action={toggleDate} />
            </div>
            <hr style={{ color: "#CBD4E6" }} />
          </div>
        )}
        <button
          className={styles.passenger_num}
          type="button"
          onClick={togglePassengerPopup}
        >
          <FontAwesomeIcon icon={faUser} />
          <span>1 adult</span>
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
        <button className={styles.search} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
