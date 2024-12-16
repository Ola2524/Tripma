import Layout from "../layout";
import Banner from "@/app/components/home/Banner/Banner";
import FlightDeals from "@/app/components/home/FlightDeals/FlightDeals";
import PlacesToStay from "@/app/components/home/PlacesToStay/PlacesToStay";
import Testimonials from "../components/home/Testimonials/Testimonials";

export default function Home() {
  return (
    <Layout>
      <main>
        <Banner />
        <FlightDeals />
        <PlacesToStay />
        <Testimonials />
      </main>
    </Layout>
  );
}
