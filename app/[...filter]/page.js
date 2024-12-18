import Layout from "@/app/layout";
import styles from "@/styles/filter.module.css";
import FilterBar from "@/app/components/filter/Filter";
import PriceGrid from "@/app/components/priceGrid/PriceGrid";
import FlightList from "@/app/components/flightList/FlightList";
import FlightDeals from "@/app/components/home/flightDeals/FlightDeals";
import PlacesToStay from "@/app/components/home/placesToStay/PlacesToStay";

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
          }}
        >
          <FlightList />
          <PriceGrid />
        </div>
        <FlightDeals />
        <PlacesToStay />
      </main>
    </Layout>
  );
}
