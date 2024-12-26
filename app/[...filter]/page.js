"use client";
import styles from "./page.module.css";
import FilterBar from "@/app/components/filter/Filter";
import PriceGrid from "@/app/components/priceGrid/PriceGrid";
import FlightList from "@/app/components/flightList/FlightList";
import Invoice from "@/app/components/invoice/Invoice";
import HotelList from "@/app/components/widgets/hotelList/HotelList";
import { hotels } from "@/lib/dummy_data";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { flights } from "@/lib/dummy_data";
import Message from "@/app/components/ui/message/Message";
import Button from "../components/ui/button/Button";

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filteredFlights, setFilteredFlights] = useState([]);
  const [selectedFlightID, setSelectedFlightID] = useState(null);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [adults, setAdults] = useState(1);
  const [minors, setMinors] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tripType, setTripType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [booking, setBookings] = useState([]);

  useEffect(() => {
    if (searchParams) {
      setFrom(searchParams.get("from").toUpperCase());
      setTo(searchParams.get("to").toUpperCase());
      setAdults(searchParams.get("adults"));
      setMinors(searchParams.get("minors"));
      setStartDate(searchParams.get("start-date"));
      setEndDate(searchParams.get("end-date"));
      setTripType(searchParams.get("trip-type"));

      const available_seats = parseInt(adults) + parseInt(minors);
      setLoading(true);
      try {
        const hasEndDate = tripType == "round_trip" ? endDate : true;
        const searchedflights = flights.filter((flight) => {
          return (
            flight.from == from &&
            flight.to == to &&
            available_seats <= flight.available_seats &&
            startDate === flight.startDate &&
            hasEndDate
          );
        });
        setFilteredFlights(searchedflights);
      } catch (error) {
        console.error("No flights found", error);
        setFilteredFlights([]);
      } finally {
        setLoading(false);
      }
    }

    if (selectedFlightID) {
      if (tripType == "round_trip" && booking.length < 2) {
        const selectedFlight = filteredFlights.find((flight) => {
          return flight.id === selectedFlightID;
        });
        setBookings((booking) => [...booking, selectedFlight]);
      } else if (tripType == "one_way") {
        const selectedFlight = filteredFlights.find((flight) => {
          return flight.id === selectedFlightID;
        });
        setBookings(() => [selectedFlight]);
      }
      setSelectedFlightID(null);
    }
  }, [
    searchParams,
    from,
    to,
    adults,
    minors,
    startDate,
    endDate,
    selectedFlightID,
  ]);

  function handleBooking() {
    localStorage.setItem("booking", JSON.stringify(booking));
    router.push(`/user/booking`);
  }

  function getAllFlights() {
    setFilteredFlights([...flights]);
  }

  return (
    <main>
      <FilterBar
        fromPlace={from}
        toPlace={to}
        adults={adults}
        minors={minors}
        startDateParam={startDate}
        endDateParam={endDate}
        tripType={tripType}
        setBookings={setBookings}
        setSelectedFlightID={setSelectedFlightID}
      />
      {/* {loading && (
        <> */}
      {filteredFlights.length > 0 ? (
        <>
          <div className={styles.second_filter}>
            <select defaultValue="0">
              <option value="0" disabled>
                Max Price
              </option>
            </select>
            <select defaultValue="0">
              <option value="0" disabled>
                Shops
              </option>
            </select>
            <select defaultValue="0">
              <option value="0" disabled>
                Times
              </option>
            </select>
            <select defaultValue="0">
              <option value="0" disabled>
                Airline
              </option>
            </select>
            <select defaultValue="0">
              <option value="0" disabled>
                Seat class
              </option>
            </select>
            <select defaultValue="0">
              <option value="0" disabled>
                More
              </option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "50px 0 80px",
              gap: "40px",
            }}
          >
            <FlightList
              flights={filteredFlights}
              from={from}
              to={to}
              setSelectedFlight={setSelectedFlightID}
              setFilteredFlights={setFilteredFlights}
              tripType={tripType}
              tripsNum={booking.length}
              getAllFlights={getAllFlights}
            />
            {booking.length > 0 ? (
              <Invoice booking={booking}>
                <Button
                  type="button"
                  action={handleBooking}
                  className={styles.submitBtn}
                >
                  Passenger information
                </Button>
              </Invoice>
            ) : (
              <PriceGrid />
            )}
          </div>
        </>
      ) : loading ? (
        "Loading..."
      ) : (
        <Message type="error">No Flights to show</Message>
      )}
      {/* </>
      )} */}
      <HotelList
        titlePart1="Find"
        highLightSpan="places to stay"
        titlePart2="in Japan"
        data={hotels}
        sliceNumber={3}
        pageLink="#"
      />

      <HotelList
        titlePart1="People in"
        highLightSpan="San Francisco"
        titlePart2="also searched for"
        data={hotels}
        sliceNumber={3}
        pageLink="#"
      />
    </main>
  );
}
