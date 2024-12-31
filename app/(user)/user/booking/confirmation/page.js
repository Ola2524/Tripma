"use client";

import Message from "@/app/components/ui/message/Message";
import styles from "./page.module.css";
import { hotels } from "@/lib/dummy_data";
import { useState, useEffect } from "react";
import Image from "next/image";
import HotelCard from "@/app/components/widgets/hotelList/HotelCard";
import Link from "next/link";
import Button from "@/app/components/ui/button/Button";

export default function Confirmation() {
  const [booking, setBooking] = useState([]);
  const [passengerInfo, setPassengerInfo] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [emailFieldNum, setEmailFieldNum] = useState(0);
  useEffect(() => {
    const booking = JSON.parse(localStorage.getItem("booking"));
    const passengerInfo = JSON.parse(localStorage.getItem("passengerInfo"));

    if (booking) {
      setBooking(...booking);
    }

    if (passengerInfo) {
      setPassengerInfo(...passengerInfo);
    }
    setDataLoaded(true);

    setEmailFieldNum(1)
  }, []);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "50px 0 80px",
        gap: "92px",
      }}
    >
      <div className={styles.booking_details}>
        <div className={styles.confirmation_message}>
          <Message type="success" hasCloseBtn="true" style={{ margin: "0" }}>
            Your flight has been booked successfully! Your confirmation number
            is #381029404387
          </Message>
          <h2>Bon voyage, Sophia!</h2>
          <h4>Confirmation number: #381029404387</h4>
          <p>
            Thank you for booking your travel with Tripma! Below is a summary of
            your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of
            your booking confirmation to your email address. You can also find
            this page again in <span>My trips</span>.
          </p>
        </div>
        <div className={styles.flight_summary}>
          <h3>Flight summary</h3>
          <h4>Departing February 25th, 2021</h4>
          <div className={styles.flight}>
            <div>
              <Image
                src={`/images/${booking.img}`}
                alt={booking.airline_name || "airline img"}
                width={40}
                height={40}
              />
            </div>
            <div>
              <p>{booking.duration}</p>
              <p>{booking.airline_name}</p>
            </div>
            <div>
              <p>{`${booking.departure_time} - ${booking.return_time}`}</p>
              <p>from - to</p>
            </div>
            <div>
              <p>
                {booking.stop_number > 0
                  ? `${booking.stop_number} Stop`
                  : "Nonstop"}
              </p>
              <p>{`${booking.stop_duration} in ${booking.stop_place}`}</p>
            </div>
            <div>
              <p>{booking.round_trip_price}</p>
              <p>round trip</p>
            </div>
          </div>
          <h5>Seat 9F (economy, window), 1 checked bag</h5>
          <h4>Departing February 25th, 2021</h4>
          <div className={styles.flight}>
            <div>
              <Image
                src={`/images/${booking.img}`}
                alt={booking.airline_name || "airline img"}
                width={40}
                height={40}
              />
            </div>
            <div>
              <p>{booking.duration}</p>
              <p>{booking.airline_name}</p>
            </div>
            <div>
              <p>{`${booking.departure_time} - ${booking.return_time}`}</p>
              <p>from - to</p>
            </div>
            <div>
              <p>
                {booking.stop_number > 0
                  ? `${booking.stop_number} Stop`
                  : "Nonstop"}
              </p>
              <p>{`${booking.stop_duration} in ${booking.stop_place}`}</p>
            </div>
            <div>
              <p>{booking.round_trip_price}</p>
              <p>round trip</p>
            </div>
          </div>
          <h5>Seat 9F (economy, window), 1 checked bag</h5>
        </div>
        <div className={styles.invoice}>
          <h3>Price breakdown</h3>
          <div className={styles.content}>
            <div>
              <p>Departing Flight</p>
              <p>$251.50</p>
            </div>
            <div>
              <p>Arriving Flight</p>
              <p>$251.50</p>
            </div>
            <div>
              <p>Baggage fees</p>
              <p>$0</p>
            </div>
            <div>
              <p>Seat upgrade (business)</p>
              <p>$199</p>
            </div>
            <div>
              <p>Subtotal</p>
              <p>$702</p>
            </div>
            <div>
              <p>Taxes (9.4%)</p>
              <p>$66</p>
            </div>
            <div className={styles.amount}>
              <p>Amount paid</p>
              <p>$768</p>
            </div>
          </div>
        </div>
        <div className={styles.payment_method}>
          <h3>Payment method</h3>
          <div className={styles.visa}>
            <Image
              src="/images/credit card.png"
              alt="visa"
              width={300}
              height={188}
            />
            <h4>Sophia Knowles</h4>
            <p className={styles.card_number}>••••••••••••3456</p>
            <p className={styles.expiration_date}>10/23</p>
          </div>
        </div>
        <div className={styles.share}>
          <h3>Share your travel itinerary</h3>
          <p>
            You can email your itinerary to anyone by entering their email
            address here.
          </p>
          {Array.from({ length: emailFieldNum }).map((_, index) => (
            <div key={index}>
              <input type="text" placeholder="Email address" />
            </div>
          ))}
          <div style={{ marginTop: "24px" }}>
            <Button type="submit">Email itinerary</Button>
            <Button
              type="button"
              className={styles.addBtn}
              action={() =>
                setEmailFieldNum((prevNum) => {
                  return prevNum + 1;
                })
              }
            >
              Add another
            </Button>
          </div>
        </div>
        <div className={styles.flight_route}>
          <h3>Flight Route</h3>
          <div className={styles.map}>
            <span className={styles.from}>SFO</span>
            <span className={styles.to}>NRT</span>
          </div>
        </div>
      </div>
      <div className={styles.hotel_container}>
        <div className={styles.hotels}>
          <h3>
            Shop <span>hotels</span>
          </h3>
          <p>
            Tripma partners with thousands of hotels to get you the best deal.
            Save up to 30% when you add a hotel to your trip.
          </p>
          <div className={styles.hotels_wrapper}>
            {hotels.slice(0, 3).map((hotel) => (
              <HotelCard
                hotel={hotel}
                key={hotel.id}
                style={{ width: "100%" }}
              />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="#">Shop all hotels</Link>
          </div>
        </div>
        <div className={styles.hotels} style={{ marginTop: "64px" }}>
          <h3>
            Find unique <span>experiences</span>
          </h3>
          <p>
            Find events and authentic cultrual experiences available exclusively
            to Tripma users.
          </p>
          <div className={styles.hotels_wrapper}>
            <div className={styles.hotels_wrapper}>
              {hotels.slice(0, 3).map((hotel) => (
                <HotelCard
                  hotel={hotel}
                  key={hotel.id}
                  style={{ width: "100%" }}
                />
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="#">View all experiences</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
