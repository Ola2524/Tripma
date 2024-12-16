import Layout from "../layout";
import Banner from "@/app/components/home/Banner/Banner";
import FilghtDeals from "@/app/components/home/FlightDeals/FilghtDeals";

export default function Home() {
  return (
    <Layout>
      <main>
        <Banner />
        <FilghtDeals />
      </main>
    </Layout>
  );
}
