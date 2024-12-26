"use client";
import BookingForm from "@/app/components/booking/BookingForm";
import Invoice from "@/app/components/invoice/Invoice";
import Button from "@/app/components/ui/button/Button";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Booking() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [booking, setBooking] = useState([]);
  const [passengerInfo, setPassengerInfo] = useState([]);
  useEffect(() => {
    const booking = JSON.parse(localStorage.getItem("bookings"));
    const passengerInfo = JSON.parse(localStorage.getItem("passengerInfo"));
    if (booking) {
      setBooking(booking);
    }

    if (passengerInfo) {
      setPassengerInfo(...passengerInfo);
    }
    setDataLoaded(true);
  }, []);

  return (
    <main>
      {dataLoaded && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "50px 0 80px",
            gap: "160px",
          }}
        >
          <BookingForm passengerInfo={passengerInfo} />
          <Invoice booking = {booking}>
            <Button type="submit" className={styles.submitBtn}>
              Select seats
            </Button>
            <div style={{ marginTop: "104px" }}>
              <Image
                src="/images/bags.png"
                alt="bags"
                width={382}
                height={525}
              />
            </div>
          </Invoice>
        </div>
      )}
    </main>
  );
}
