"use client";
import Button from "@/app/components/ui/button/Button";
import styles from "./BookingForm.module.css";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm({ passengerInfo, booking }) {
  const router = useRouter();
  const [sameAsPassengerStatus, setSameAsPassengerStatus] = useState(false);
  const [passengerNum, setPassengerNum] = useState(0);

  const firstName = useRef([]);
  const middle = useRef([]);
  const lastName = useRef([]);
  const suffix = useRef([]);
  const birthDate = useRef([]);
  const email = useRef([]);
  const phone = useRef([]);
  const redressNumber = useRef([]);
  const travellerNumber = useRef([]);

  const emergencyFirstName = useRef([]);
  const emergencyLastName = useRef([]);
  const emergencyEmail = useRef([]);
  const emergencyPhone = useRef([]);

  const [bagsNum, setBagsNum] = useState([1]);

  useEffect(() => {
    if (booking.length > 0) {
      setPassengerNum(
        parseInt(booking[0].minors) + parseInt(booking[0].adults)
      );
    }

    if (passengerInfo.length > 0) {
      // firstName.current.value.push(passengerInfo.firstName);
      // middle.current.push(passengerInfo.middle);
      // lastName.current.push(passengerInfo.lastName);
      // suffix.current.push(passengerInfo.suffix);
      // email.current.push(passengerInfo.email);
      // phone.current.push(passengerInfo.phone);
      // redressNumber.current.push(passengerInfo.redressNumber);
      // travellerNumber.current.push(passengerInfo.travellerNumber);
      // emergencyFirstName.current.push(passengerInfo.emergencyFirstName);
      // emergencyLastName.current.push(passengerInfo.emergencyLastName);
      // emergencyEmail.current.push(passengerInfo.emergencyEmail);
      // emergencyPhone.current.push(passengerInfo.emergencyPhone);
      // setBagsNum((prevBagsNum)=>{[...prevBagsNum, passengerInfo.bagsNum]});
      // setSameAsPassengerStatus((prevSameAsPassengerStatus)=>{[...prevSameAsPassengerStatus, passengerInfo.sameAsPassengerStatus]});
    }
  }, [passengerInfo]);

  function handleEmergencyData() {
    setSameAsPassengerStatus((prevStatus) => {
      const newStatus = !prevStatus;

      if (newStatus) {
        emergencyFirstName.current.value = firstName.current.value;
        emergencyLastName.current.value = lastName.current.value;
        emergencyEmail.current.value = email.current.value;
        emergencyPhone.current.value = phone.current.value;
      } else {
        emergencyFirstName.current.value = "";
        emergencyLastName.current.value = "";
        emergencyEmail.current.value = "";
        emergencyPhone.current.value = "";
      }

      return newStatus;
    });
  }

  function saveData() {
    const passengerInfo = [
      {
        firstName: firstName.current.value,
        middle: middle.current.value,
        lastName: lastName.current.value,
        suffix: suffix.current.value,
        birthDate: birthDate.current.value,
        email: email.current.value,
        phone: phone.current.value,
        redressNumber: redressNumber.current.value,
        travellerNumber: travellerNumber.current.value,
        emergencyFirstName: emergencyFirstName.current.value,
        emergencyLastName: emergencyLastName.current.value,
        emergencyEmail: emergencyEmail.current.value,
        emergencyPhone: emergencyPhone.current.value,
        bagsNum: bagsNum,
        sameAsPassengerStatus: sameAsPassengerStatus,
      },
    ];

    localStorage.setItem("passengerInfo", JSON.stringify(passengerInfo));

    router.back();
  }

  function handleBookingForm(e) {
    e.preventDefault();
    router.push(`/user/seat`);
  }

  return (
    <div className={styles.booking_form}>
      <h2>Passenger information</h2>
      <p>
        Enter the required information for each traveler and be sure that it
        exactly matches the government-issued ID presented at the airport.
      </p>
      <form onSubmit={handleBookingForm}>
        {[...Array(passengerNum)].map((passenger, index) => {
          const isAdult = index < parseInt(booking[0].adults);
          return (
            <div key={index}>
              <fieldset>
                <h3>
                  Passenger {index + 1} ({isAdult ? "Adult" : "Minor"})
                </h3>
                <div className={styles.personal_info}>
                  <input
                    type="text"
                    ref={firstName}
                    placeholder="First name*"
                  />
                  <input type="text" ref={middle} placeholder="Middle" />
                  <input type="text" ref={lastName} placeholder="Last name*" />
                  <input type="text" ref={suffix} placeholder="Suffix" />
                  <div className={styles.birth_date}>
                    <input
                      type="date"
                      ref={birthDate}
                      placeholder="Date of birth*"
                    />
                  </div>
                </div>
                <div className={styles.contact_info}>
                  <input
                    type="email"
                    ref={email}
                    placeholder="Email address*"
                  />
                  <input
                    type="number"
                    ref={phone}
                    placeholder="Phone number*"
                  />
                  <input
                    type="text"
                    ref={redressNumber}
                    placeholder="Redress number"
                  />
                  <input
                    type="text"
                    ref={travellerNumber}
                    placeholder="Known traveller number*"
                  />
                </div>
              </fieldset>
              <fieldset>
                <h3>Emergency contact information</h3>
                <div style={{ gap: "3px" }}>
                  <input
                    type="checkbox"
                    value={sameAsPassengerStatus}
                    checked={sameAsPassengerStatus === true}
                    onChange={handleEmergencyData}
                    id="pass1"
                  />
                  <label htmlFor="pass1">Same as Passenger 1</label>
                </div>
                <div>
                  <input
                    type="text"
                    ref={emergencyFirstName}
                    placeholder="First name*"
                  />
                  <input
                    type="text"
                    ref={emergencyLastName}
                    placeholder="Last name*"
                  />
                  <input
                    type="email"
                    ref={emergencyEmail}
                    placeholder="Email address*"
                  />
                  <input
                    type="number"
                    ref={emergencyPhone}
                    placeholder="Phone number*"
                  />
                </div>
              </fieldset>
              {passengerNum > 1 && <hr style={{width: "600px", marginTop: "70px"}} />}
            </div>
          );
        })}
        <fieldset>
          <h3>Bag information</h3>
          <p>
            Each passenger is allowed one free carry-on bag and one personal
            item. First checked bag for each passenger is also free. Second bag
            check fees are waived for loyalty program members. See the full bag
            policy.
          </p>
          {[...Array(passengerNum)].map((passenger, index) => (
            <div className={styles.bags_number} key={index}>
              <div>
                <h4>Passenger {index + 1}</h4>
                <h4>Checked bags</h4>
              </div>
              <div>
                <span>First Last</span>
                <div style={{ justifyContent: "center", gap: "17px" }}>
                  <button
                    type="button"
                    onClick={() => bagsNum > 1 && setBagsNum((num) => num - 1)}
                  >
                    -
                  </button>
                  <span>{bagsNum}</span>
                  <button
                    type="button"
                    onClick={() => setBagsNum((num) => num + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </fieldset>
        <div style={{ marginTop: "75px" }}>
          <Button type="button" className={styles.saveBtn} action={saveData}>
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
