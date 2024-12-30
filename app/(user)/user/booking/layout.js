import OfferBar from "@/app/components/layout/offerbar/Offerbar";
import Navbar from "@/app/components/layout/navbar/Navbar";
import Footer from "@/app/components/layout/footer/Footer";
import CookieBox from "@/app/components/layout/cookieBox/CookieBox";

export default function Layout({ children }) {
  return (
    <>
      <OfferBar />
      <Navbar />
      {children}
      <Footer />
      <CookieBox />
    </>
  );
}
