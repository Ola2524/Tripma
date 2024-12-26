"use client";
import Button from "@/app/components/ui/button/Button";
import styles from "./PaymentForm.module.css";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentForm({ paymentInfo }) {
  const router = useRouter();
  const [sameAsPassengerAddress, setSameAsPassengerAddress] = useState(false);

  const cardName = useRef("");
  const cardNumber = useRef("");
  const expirationDate = useRef("");
  const CCV = useRef("");
  const saveCard = useRef("");

  useEffect(() => {
    if (paymentInfo) {
      cardName.current.value = paymentInfo.cardName;
      cardNumber.current.value = paymentInfo.cardNumber;
      expirationDate.current.value = paymentInfo.expirationDate;
      CCV.current.value = paymentInfo.CCV;
      saveCard.current.value = paymentInfo.saveCard;
      setSameAsPassengerAddress(paymentInfo.sameAsPassengerAddress);
    }
  }, [paymentInfo]);

  function goBack() {
    // const paymentInfo = [
    //   {
    //     cardName: cardName.current.value,
    //     cardNumber: cardNumber.current.value,
    //     expirationDate: expirationDate.current.value,
    //     CCV: CCV.current.value,
    //     saveCard: saveCard.current.value,
    //     sameAsPassengerAddress: sameAsPassengerAddress,
    //   },
    // ];

    // localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));

    router.back();
  }

  function handlePassengerAddressing() {
    setSameAsPassengerAddress((prevAddress) => (prevAddress = !prevAddress));
  }

  function handleBookingForm(e) {
    e.preventDefault();

    // if (
    //   cardName.current.value != "" &&
    //   cardNumber.current.value != "" &&
    //   expirationDate.current.value != "" &&
    //   CCV.current.value != ""
    // ) {
      router.push("/user/booking/confirmation");
    // }
  }

  return (
    <div className={styles.payment_form}>
      <form onSubmit={handleBookingForm}>
        <fieldset>
          <h3>Credit card details</h3>
          <div className={styles.card_info}>
            <div style={{ gap: "3px" }}>
              <input
                type="checkbox"
                value={sameAsPassengerAddress}
                checked={sameAsPassengerAddress === true}
                onChange={handlePassengerAddressing}
                id="pass1"
              />
              <label htmlFor="pass1">
                Billing address is same as Passenger 1
              </label>
            </div>
            <input type="text" ref={cardName} placeholder="Name on card" />
            <input type="number" ref={cardNumber} placeholder="Card number" />
            <div className={styles.expirationDate}>
              <input
                type="date"
                ref={expirationDate}
                placeholder="Expiration date"
              />
            </div>
            <input
              type="text"
              ref={CCV}
              placeholder="CCV"
              className={styles.ccv}
            />
            <div style={{ gap: "3px" }}>
              <input type="checkbox" ref={saveCard} id="sava-card" />
              <label htmlFor="sava-card">
                Save card and create account for later
              </label>
            </div>
          </div>
        </fieldset>
        <div style={{ marginTop: "48px" }}>
          <h3>Cancellation policy</h3>
          <p>
            This flight has a flexible cancellation policy. If you cancel or
            change your flight up to 30 days before the departure date, you are
            eligible for a free refund. All flights booked on Tripma are backed
            by our satisfaction guarantee, however cancellation policies vary by
            airline. See the full cancellation policy for this flight.
          </p>
        </div>
        <div style={{ marginTop: "75px" }}>
          <Button type="button" className={styles.backBtn} action={goBack}>
            Back to seat select
          </Button>
          <Button type="submit" className={styles.submitBtn}>
            Confirm and pay
          </Button>
        </div>
      </form>
    </div>
  );
}
