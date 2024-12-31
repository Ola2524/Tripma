"use client";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Button from "@/app/components/ui/button/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Seats from "@/app/components/seats/Seats";

export default function Seat() {
  const router = useRouter();
  const [status, setStatus] = useState("departure");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [exitDoors, setExitDoors] = useState([]);

  const [businessSeats, setBusinessSeats] = useState([]);
  const [economySeats, setEconomySeats] = useState([]);
  const [businessRowNum, setBusinessRowNum] = useState(-1);
  const [economyRowNum, setEconomyRowNum] = useState(-1);

  const [booking, setBooking] = useState([]);

  const [departureBooking, setDepartureBooking] = useState(null);
  const [arrivingBooking, setArrivingBooking] = useState(null);

  const [departureSelectedSeats, setDepartureSelectedSeats] = useState([]);
  const [arrivingSelectedSeats, setArrivingSelectedSeats] = useState([]);

  const [showBusinessPopup, setShowBusinessPopup] = useState(null);
  const [selectedBusinessSeat, setSelectedBusinessSeat] = useState(null);

  // const [booking, setBookings] = useState([]);
  const [passengerInfo, setPassengerInfo] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const booking = JSON.parse(localStorage.getItem("booking"));
    const passengerInfo = JSON.parse(localStorage.getItem("passengerInfo"));

    if (booking) {
      if (booking.length > 1) {
        setDepartureBooking(booking[0]);
        setArrivingBooking(booking[1]);
      } else {
        setDepartureBooking(booking[0]);
      }
      setBooking(booking[0]);
    }

    if (passengerInfo) {
      setPassengerInfo(...passengerInfo);
    }
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (booking && booking?.id) {
      async function fetchSeats() {
        try {
          const response = await fetch(
            `/api/seats?flight_id=${parseInt(booking?.id)}`
          );
          const data = await response.json();
          setBusinessSeats(() => {
            return data.filter((seat) => seat.class === "business");
          });
          setEconomySeats(() => {
            return data.filter((seat) => seat.class === "economy");
          });
        } catch (error) {
          console.error("Fetch Error:", error);
        } finally {
          setDataLoaded(true);
        }
      }

      async function fetchDoors() {
        try {
          const response = await fetch(
            `/api/exit_doors?flight_id=${parseInt(booking?.id)}`
          );
          const data = await response.json();
          setExitDoors(data);
        } catch (error) {
          console.error("Fetch Error:", error);
        } finally {
          setDataLoaded(true);
        }
      }

      fetchSeats();
      fetchDoors();
    }
  }, [booking]);

  useEffect(() => {
    setBusinessRowNum(() =>
      businessSeats.findIndex(
        (seat) => seat.x_coordinate === 2 && seat.y_coordinate === 1
      )
    );

    setEconomyRowNum(() =>
      economySeats.findIndex(
        (seat) =>
          seat.x_coordinate ==
            businessSeats[businessSeats.length - 1].x_coordinate + 2 &&
          seat.y_coordinate == 1
      )
    );
  }, [businessSeats, economySeats]);

  function upgradeToBusinessClass(selectedBusinessSeat) {
    setSelectedSeats((prevSelectedSeats) => {
      const seatExists = prevSelectedSeats.some(
        (s) => s.id === selectedBusinessSeat.id
      );
      if (seatExists) {
        return prevSelectedSeats.filter(
          (s) => s.id !== selectedBusinessSeat.id
        );
      } else {
        return [
          ...prevSelectedSeats,
          { ...selectedBusinessSeat, isSelected: true },
        ];
      }
    });
    setShowBusinessPopup(false);
  }

  function handleFlightBooking() {
    if (departureBooking?.tripType == "round_trip") {
      if (status == "departure") {
        setDepartureSelectedSeats(selectedSeats);
        setSelectedSeats([]);
        setStatus("arriving");
      } else if (status == "arriving") {
        setArrivingSelectedSeats(selectedSeats);
        router.push(`/user/payment`);
      }
    } else {
      setDepartureSelectedSeats(selectedSeats);
      router.push(`/user/payment`);
    }
  }

  return (
    <>
      <div className={styles.flight_seats}>
        <Image
          src="/images/Plane (seat selection).png"
          alt="flight"
          width={2426}
          height={2965}
          className={styles.flight_img}
        />

        <Seats
          businessSeats={businessSeats}
          businessRowNum={businessRowNum}
          economySeats={economySeats}
          economyRowNum={economyRowNum}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          exitDoors={exitDoors}
          setShowBusinessPopup={setShowBusinessPopup}
          upgradeToBusinessClass={upgradeToBusinessClass}
          setSelectedBusinessSeat={setSelectedBusinessSeat}
        />
      </div>
      <div className={styles.booking_details}>
        <header>
          <div>
            {departureBooking?.tripType == "round_trip" &&
            status == "arriving" ? (
              <>
                <h4>{arrivingBooking?.from}</h4>
                <p>
                  {arrivingBooking?.from_city}, {arrivingBooking?.from_country}
                </p>
              </>
            ) : (
              <>
                <h4>{departureBooking?.from}</h4>
                <p>
                  {departureBooking?.from_city},{" "}
                  {departureBooking?.from_country}
                </p>
              </>
            )}
          </div>
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrow_icon} />
          <div>
            {departureBooking?.tripType == "round_trip" &&
            status == "arriving" ? (
              <>
                <h4>{arrivingBooking?.to}</h4>
                <p>
                  {arrivingBooking?.to_city}, {arrivingBooking?.to_country}
                </p>
              </>
            ) : (
              <>
                <h4>{departureBooking?.to}</h4>
                <p>
                  {departureBooking?.to_city}, {departureBooking?.to_country}
                </p>
              </>
            )}
          </div>
          <div
            className={status == "departure" ? styles.active_tab : undefined}
          >
            <h5>
              {departureBooking?.startDate} | {departureBooking?.departure_time}
            </h5>
            <p>Departing</p>
          </div>
          {departureBooking?.tripType == "round_trip" && (
            <div
              className={status == "arriving" ? styles.active_tab : undefined}
            >
              <h5>
                {arrivingBooking?.endDate} | {arrivingBooking?.return_time}
              </h5>
              <p>Arriving</p>
            </div>
          )}
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
                {/* {selectedSeats?.class === "economy" && (
                  <span className={styles.selected_badge}>Selected</span>
                )} */}
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
                {/* {selectedSeats?.class === "business" && (
                  <span className={styles.selected_badge}>Selected</span>
                )} */}
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
                {selectedSeats.length > 0
                  ? selectedSeats[0]?.label
                  : "--"}
              </p>
            </div>
            <div>
              <Button type="button" className={styles.saveBtn}>
                Save and close
              </Button>
              <Button
                type="button"
                // className={`${styles.nextBtn} ${
                //   selectedSeats && styles.active
                // }`}
                action={handleFlightBooking}
              >
                {departureBooking.tripType == "one_way" ||
                (status == "arriving" && selectedSeats.length > 0)
                  ? "Payment method"
                  : "Next flight"}
              </Button>
            </div>
          </div>
        )}
      </div>
      {showBusinessPopup && (
        <div className={styles.business_class_popup}>
          <div className={styles.message}>
            <h3>Upgrade seat</h3>
            <p>
              Upgrade your seat for only ${selectedBusinessSeat?.price}, and
              enjoy 45 percent more leg room, and seats that recline 40 percent
              more than economy.
            </p>
            <div style={{ textAlign: "right" }}>
              <Button
                type="button"
                className={styles.cancel}
                action={() => setShowBusinessPopup(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                action={() => upgradeToBusinessClass(selectedBusinessSeat)}
              >
                Upgrade for ${selectedBusinessSeat?.price}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
