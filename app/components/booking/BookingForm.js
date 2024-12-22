"use client";
import Button from "@/app/components/ui/button/Button";
import styles from "./BookingForm.module.css";
import { useState, useRef } from "react";

export default function BookingForm() {
  const [bagsNum, setBagsNum] = useState(1);
  function decreaseBagsNumber() {
    if (bagsNum > 1) {
      setBagsNum((num) => num - 1);
    }
  }

  function increaseBagsNumber() {
    setBagsNum((num) => num + 1);
  }
  return (
    <div className={styles.booking_form}>
      <h2>Passenger information</h2>
      <p>
        Enter the required information for each traveler and be sure that it
        exactly matches the government-issued ID presented at the airport.
      </p>
      <form>
        <fieldset>
          <h3>Passenger 1 (Adult)</h3>
          <div className={styles.personal_info}>
            <input type="text" placeholder="First name*" />
            <input type="text" placeholder="Middle" />
            <input type="text" placeholder="Last name*" />
            <input type="text" placeholder="Suffix" />
            <div className={styles.birth_date}>
              <input type="text" placeholder="Date of birth*" />
            </div>
          </div>
          <div className={styles.contact_info}>
            <input type="text" placeholder="Email address*" />
            <input type="text" placeholder="Phone number*" />
            <input type="text" placeholder="Redress number" />
            <input type="text" placeholder="Known traveller number*" />
          </div>
        </fieldset>
        <fieldset>
          <h3>Emergency contact information</h3>
          <div style={{ gap: "3px" }}>
            <input type="checkbox" id="pass1" />
            <label htmlFor="pass1">Same as Passenger 1</label>
          </div>
          <div>
            <input type="text" placeholder="First name*" />
            <input type="text" placeholder="Last name*" />
            <input type="text" placeholder="Email address*" />
            <input type="text" placeholder="Phone number*" />
          </div>
        </fieldset>
        <fieldset>
          <h3>Bag information</h3>
          <p>
            Each passenger is allowed one free carry-on bag and one personal
            item. First checked bag for each passenger is also free. Second bag
            check fees are waived for loyalty program members. See the full bag
            policy.
          </p>
          <div className={styles.bags_number}>
            <div>
              <h4>Passenger 1</h4>
              <h4>Checked bags</h4>
            </div>
            <div>
              <span>First Last</span>
              <div style={{ justifyContent: "center", gap: "17px" }}>
                <button type="button" onClick={decreaseBagsNumber}>
                  -
                </button>
                <span>{bagsNum}</span>
                <button type="button" onClick={increaseBagsNumber}>
                  +
                </button>
              </div>
            </div>
          </div>
        </fieldset>
        <div style={{ marginTop: "75px" }}>
          <Button type="button" className={styles.saveBtn}>
            Save and close
          </Button>
          <Button type="submit" className={styles.submitBtn}>
            Select seats
          </Button>
        </div>
      </form>
    </div>
  );
}
