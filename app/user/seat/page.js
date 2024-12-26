"use client";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Button from "@/app/components/ui/button/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Seat() {
  const router = useRouter();
  const [status, setStatus] = useState("departure");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [departureSelectedSeat, setDepartureSelectedSeat] = useState(null);
  const [arrivingSelectedSeat, setArrivingSelectedSeat] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [passengerInfo, setPassengerInfo] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings"));
    const passengerInfo = JSON.parse(localStorage.getItem("passengerInfo"));

    if (bookings) {
      setBookings(...bookings);
    }

    if (passengerInfo) {
      setPassengerInfo(...passengerInfo);
    }
    setDataLoaded(true);
  }, []);

  function handleFlightBooking() {
    if (status == "departure") {
      setDepartureSelectedSeat(selectedSeat);
      setSelectedSeat(null);
      setStatus("arriving");
    } else if (status == "arriving") {
      setArrivingSelectedSeat(selectedSeat);
      router.push(`/user/payment`);
    }
  }

  // function handleDeparture() {
  //   setDepartureSelectedSeat(selectedSeat);
  //   setSelectedSeat(null);
  //   setStatus("arriving");
  // }

  // function handleArriving() {
  //   if (selectedSeat) {
  //     setArrivingSelectedSeat(selectedSeat);
  //     router.push(`/user/payment`);
  //   }
  // }

  return (
    <>
      <div className={styles.flight_seats}>
        <img src="/images/Plane (seat selection).png" alt="flight" />
        <div className={styles.business_class}>
          {[...Array(5)].map((_, row) => {
            console.log(row);
            row++;
            return (
              <div className={styles.flightRow} key={`row-${row}`}>
                {[...Array(5)].map((_, seat) => {
                  let seatNum = seat;
                  const isRowStart = seatNum === 2;
                  if (isRowStart) {
                    seatNum--;
                  }
                  return (
                    <>
                      {isRowStart ? (
                        <div className={styles.rowNum}>{row}</div>
                      ) : (
                        <label
                          className={`${styles.seat} ${
                            selectedSeat?.row === row &&
                            selectedSeat?.seat.charCodeAt(0) - 65 === seatNum
                              ? styles.selected
                              : styles.available
                          }`}
                          key={`${row}-${seat}`}
                          onClick={() =>
                            setSelectedSeat({
                              row,
                              seat: String.fromCharCode(65 + seatNum),
                              class: "business",
                            })
                          }
                        >
                          <input type="checkbox" name="seat" />
                        </label>
                      )}
                    </>
                  );
                })}
              </div>
            );
          })}
          {/* <div className={`${styles.seat} ${styles.available}`}></div> */}
        </div>
        <div className={styles.economy_class}>
          {[...Array(28)].map((_, row) => {
            const rowNum = row + 6;
            return (
              <div className={styles.flightRow} key={rowNum}>
                {[...Array(7)].map((_, seat) => {
                  let seatNum = seat++;
                  const isRowStart = seat === 4;
                  if (isRowStart) {
                    seatNum--;
                  }
                  return (
                    <>
                      {isRowStart ? (
                        <div className={styles.rowNum}>{rowNum}</div>
                      ) : (
                        <label
                          className={`${styles.seat} ${
                            selectedSeat?.row === rowNum &&
                            selectedSeat?.seat.charCodeAt(0) - 65 === seatNum
                              ? styles.selected
                              : styles.available
                          }`}
                          key={`${row}-${seat}`}
                          onClick={() =>
                            setSelectedSeat({
                              row: rowNum,
                              seat: String.fromCharCode(65 + seatNum),
                              class: "economy",
                            })
                          }
                        >
                          <input type="checkbox" name="seat" />
                        </label>
                      )}
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.booking_details}>
        <header>
          <div>
            <h4>{bookings.from}</h4>
            <p>
              {bookings.from_city}, {bookings.from_country}
            </p>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrow_icon} />
          <div>
            <h4>{bookings.to}</h4>
            <p>
              {bookings.to_city}, {bookings.to_country}
            </p>
          </div>
          <div className={status == "departure" && styles.active_tab}>
            <h5>
              {bookings.startDate} | {bookings.departure_time}
            </h5>
            <p>Departing</p>
          </div>
          <div className={status == "arriving" && styles.active_tab}>
            <h5>
              {bookings.endDate} | {bookings.return_time}
            </h5>
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
              <div style={{ position: "relative" }}>
                <h3>Economy</h3>
                {selectedSeat?.class === "economy" && (
                  <span className={styles.selected_badge}>Selected</span>
                )}
              </div>
              <p>
                Rest and recharge during your flight with extended leg room,
                personalized service, and a multi-course meal service
              </p>
              <div className={styles.divider}></div>
              <ul>
                <li>Built-in entertainment system</li>
                <li>Complimentary snacks and drinks</li>
                <li>One free carry-on and personal item</li>
              </ul>
            </div>
          </div>
          <div className={styles.business}>
            <Image
              src="/images/Business Seats.png"
              alt="business"
              width={320}
              height={180}
            />
            <div className={styles.content}>
              <div style={{ position: "relative" }}>
                <h3>Business class</h3>
                {selectedSeat?.class === "business" && (
                  <span className={styles.selected_badge}>Selected</span>
                )}
              </div>
              <p>
                Rest and recharge during your flight with extended leg room,
                personalized service, and a multi-course meal service
              </p>
              <div className={styles.divider}></div>
              <ul>
                <li>Extended leg room</li>
                <li>First two checked bags free</li>
                <li>Priority boarding</li>
                <li>Personalized service</li>
                <li>Enhanced food and drink service</li>
                <li>Seats that recline 40% more than economy</li>
              </ul>
            </div>
          </div>
        </div>
        {dataLoaded && (
          <div className={styles.seat_footer}>
            <div>
              <h5>Passenger 1</h5>
              <p>{`${passengerInfo.firstName} ${passengerInfo.lastName}`}</p>
            </div>
            <div>
              <h5>Seat number</h5>
              <p>
                {selectedSeat
                  ? `${selectedSeat.row}${selectedSeat.seat}`
                  : "--"}
              </p>
            </div>
            <div>
              <Button type="button" className={styles.saveBtn}>
                Save and close
              </Button>
              <Button
                type="button"
                className={`${styles.nextBtn} ${selectedSeat && styles.active}`}
                action={handleFlightBooking}
              >
                {status == "arriving" && selectedSeat
                  ? "Payment method"
                  : "Next flight"}
              </Button>
              {/* {status == "departure" ? (
                <Button
                  type="button"
                  className={`${styles.nextBtn} ${
                    selectedSeat && styles.active
                  }`}
                  action={handleDeparture}
                >
                  Next flight
                </Button>
              ) : (
                <Link
                  href="/user/payment"
                  className={`${styles.nextBtn} ${
                    selectedSeat && styles.active
                  }`}
                  onClick={setArrivingSelectedSeat(selectedSeat)}
                ></Link>
                <Button
                  type="button"
                  className={`${styles.nextBtn} ${
                    selectedSeat && styles.active
                  }`}
                  action={handleArriving}
                >
                  {selectedSeat ? "Payment method" : "Next flight"}
                </Button>
              )} */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
