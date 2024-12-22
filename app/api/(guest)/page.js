import Layout from "./[...filter]/layout";
import Banner from "@/app/components/home/banner/Banner";
import HotelCards from "@/app/components/widgets/hotelCards/HotelCards";
import Testimonials from "@/app/components/home/testimonials/Testimonials";
import Button from "@/app/components/ui/button/Button";
import { hotels } from "@/lib/dummy_data";
// import Loading from "./loading";
// import { Suspense } from "react";

export default function Home() {
  return (
    // <Suspense fallback={<Loading />}>
    <Layout>
      <Banner />
      <main>
        <HotelCards
          titlePart1="Find your next adventure with these"
          highLightSpan="flight deals"
          data={hotels}
          sliceNumber={4}
          pageLink="#"
        />
        <HotelCards
          titlePart1="Explore unique"
          highLightSpan="places to stay"
          data={hotels}
          sliceNumber={3}
          pageLink="#"
          highLightStyle={{
            background: "linear-gradient(180deg, #5cd6c0 0%, #22c3a6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          {/* <Link href="#">Explore more stays</Link> */}
          <Button type="button">Explore more stays</Button>
        </div>
        <Testimonials />
      </main>
    </Layout>
    // </Suspense>
  );
}
