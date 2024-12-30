"use client";
import PaymentForm from "@/app/components/payment/PaymentForm";
import Invoice from "@/app/components/widgets/invoice/Invoice";
import Button from "@/app/components/ui/button/Button";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Payment() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);
  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings"));
    const paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));
    if (bookings) {
      setBookings(bookings);
    }

    if (paymentInfo) {
      setPaymentInfo(...paymentInfo);
    }
    setDataLoaded(true);
  }, []);

  return (
    <main>
      {dataLoaded && (
        <div className={styles.main}>
          <div className={styles.payment}>
            <h2>Payment method</h2>
            <p>
              Select a payment method below. Tripma processes your payment
              securely with end-to-end encryption.
            </p>
            <div className={styles.payment_methods}>
              <div className={`${styles.tab} ${styles.active}`}>
                <img src="/images/icon.svg" alt="credit icon" />
                <span>Credit card</span>
              </div>
              <div className={styles.tab}>
                <img src="/images/google.svg" alt="Google Pay icon" />
                <span>Google Pay</span>
              </div>
              <div className={styles.tab}>
                <img src="/images/apple mac.svg" alt="Apple pay icon" />
                <span>Apple pay</span>
              </div>
              <div className={styles.tab}>
                <img src="/images/paypal.svg" alt="Paypal icon" />
                <span>Paypal</span>
              </div>
              <div className={styles.tab}>
                <img
                  src="/images/bitcoin money currency crypto.svg"
                  alt="Crypto icon"
                />
                <span>Crypto</span>
              </div>
            </div>
            <PaymentForm paymentInfo={paymentInfo.length > 0 && paymentInfo} />
          </div>
          <div style={{ width: "400px" }}>
            <Invoice booking={bookings}>
              <Button type="submit" className={styles.submitBtn}>
                Confirm and pay
              </Button>
            </Invoice>
          </div>
        </div>
      )}
    </main>
  );
}
