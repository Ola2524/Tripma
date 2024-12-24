import styles from "./Invoice.module.css";
import Image from "next/image";
import Button from "@/app/components/ui/button/Button";

export default function Invoice({ children, bookings }) {
  return (
    <div className={styles.invoice}>
      <div className={styles.booked_flights}>
        {bookings.map((booking, index) => (
          <div className={styles.booking_item} key={index}>
            <div className={styles.booking_title}>
              <Image
                src={`/images/${booking.img}`}
                alt={booking.airline_name}
                width={40}
                height={40}
              />
              <div>
                <h5>{booking.airline_name}</h5>
                <p>{booking.flight_number}</p>
              </div>
            </div>
            <div className={styles.booking_details}>
              <p>{booking.duration} (+1d)</p>
              <p>
                {booking.departure_date} - {booking.return_date}
              </p>
              <p>
                {booking.stop_duration} in {booking.stop_place}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.booking_cost}>
        <div>
          <h5>Subtotal</h5>
          <h5>Taxes and Fees</h5>
          <h5>Total</h5>
        </div>
        <div>
          <p>$503</p>
          <p>$121</p>
          <p>$624</p>
        </div>
      </div>
      <div
        style={{
          textAlign: "right",
          marginTop: "34px",
          marginBottom: "104px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
