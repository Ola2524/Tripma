import Layout from "./layout";
import Banner from "@/app/components/home/banner/Banner";
import FlightDeals from "@/app/components/home/flightDeals/FlightDeals";
import PlacesToStay from "@/app/components/home/placesToStay/PlacesToStay";
import Testimonials from "@/app/components/home/testimonials/Testimonials";
// import Loading from "./loading";
// import { Suspense } from "react";

export default function Home() {
  return (
    // <Suspense fallback={<Loading />}>
    <Layout>
      <main>
        <Banner />
        <FlightDeals />
        <PlacesToStay />
        <Testimonials />
      </main>
    </Layout>
    // </Suspense>
  );
}
