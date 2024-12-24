import BookingForm from "@/app/components/booking/BookingForm";
import Invoice from "@/app/components/invoice/Invoice";
import Button from "@/app/components/ui/button/Button";
import { bookings } from "@/lib/dummy_data";
import Image from "next/image";
import styles from "./page.module.css";

export default function Booking() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px 0 80px",
          gap: "160px",
        }}
      >
        <BookingForm />
        <Invoice
          bookings={bookings}
        >
          <Button type="submit" className={styles.submitBtn}>
            Select seats
          </Button>
          <div style={{marginTop: "104px"}}>
            <Image src="/images/bags.png" alt="bags" width={382} height={525} />
          </div>
        </Invoice>
      </div>
    </main>
  );
}
