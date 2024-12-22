import Layout from "@/app/layout";
import styles from "./filter.module.css";
import FilterBar from "@/app/components/filter/Filter";
import PriceGrid from "@/app/components/priceGrid/PriceGrid";
import FlightList from "@/app/components/flightList/FlightList";
import HotelCards from "@/app/components/widgets/hotelCards/HotelCards";
import { hotels } from "@/lib/dummy_data";

export default function Filter() {
  return (
    <Layout>
      <main>
        <FilterBar />
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
          <FlightList />
          <PriceGrid />
        </div>
        <HotelCards
          titlePart1="Find"
          highLightSpan="places to stay"
          titlePart2="in Japan"
          data={hotels}
          sliceNumber={3}
          pageLink="#"
        />

        <HotelCards
          titlePart1="People in"
          highLightSpan="San Francisco"
          titlePart2="also searched for"
          data={hotels}
          sliceNumber={3}
          pageLink="#"
        />
      </main>
    </Layout>
  );
}
