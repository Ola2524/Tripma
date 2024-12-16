import OfferBar from "@/app/components/global/Offerbar/Offerbar";
import Navbar from "@/app/components/global/Navbar/Navbar";
import Footer from "@/app/components/global/Footer/Footer";
import CookieBox from "@/app/components/global/CookieBox/CookieBox";
import { Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className}`}>
        <OfferBar />
        <Navbar />
        {children}
        <Footer />
        <CookieBox />
      </body>
    </html>
  );
}
