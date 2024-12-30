import Banner from "@/app/components/home/banner/Banner";
import HotelList from "@/app/components/widgets/hotelList/HotelList";
import Testimonials from "@/app/components/home/testimonials/Testimonials";
import Button from "@/app/components/ui/button/Button";
import { hotels } from "@/lib/dummy_data";
// import { getServerSession } from "next-auth";
// import { options } from "@/lib/authOptions";
// import Loading from "./loading";
// import { Suspense } from "react";

export default function Home() {
  // const session = await getServerSession(options);
  return (
    // <Suspense fallback={<Loading />}>
    <>
      <Banner />
      <main>
        <HotelList
          titlePart1="Find your next adventure with these"
          highLightSpan="flight deals"
          data={hotels}
          sliceNumber={4}
          pageLink="#"
        />
        <HotelList
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
    </>
    // </Suspense>
  );
}
