import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.upper_footer}>
        <div className={styles.logo}>
          <h2>Tripma</h2>
        </div>
        <div className={styles.footer_links}>
          <h3>About</h3>
          <ul>
            <li>
              <Link href="#">About Tripma</Link>
            </li>
            <li>
              <Link href="#">How it works</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Forum</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_links}>
          <h3>Partner with us</h3>
          <ul>
            <li>
              <Link href="#">Partnership programs</Link>
            </li>
            <li>
              <Link href="#">Affiliate program</Link>
            </li>
            <li>
              <Link href="#">Connectivity partners</Link>
            </li>
            <li>
              <Link href="#">Promotions and events</Link>
            </li>
            <li>
              <Link href="#">Connectivity partners</Link>
            </li>
            <li>
              <Link href="#">Community</Link>
            </li>
            <li>
              <Link href="#">Loyalty program</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_links}>
          <h3>Support</h3>
          <ul>
            <li>
              <Link href="#">Help Center</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
            <li>
              <Link href="#">Terms of service</Link>
            </li>
            <li>
              <Link href="#">Trust and safety</Link>
            </li>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_links}>
          <h3>Get the app</h3>
          <ul>
            <li>
              <Link href="#">Tripma for Android</Link>
            </li>
            <li>
              <Link href="#">Tripma for iOS</Link>
            </li>
            <li>
              <Link href="#">Mobile site</Link>
            </li>
          </ul>
          <div className={styles.app_links}>
            <Image
              src="/images/app store.png"
              alt="app store"
              width={135}
              height={40}
            />
            <Image
              src="/images/google play.png"
              alt="google play"
              width={135}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className={styles.copy_write}>
        <div className={styles.social_links}>
          <Link href="#"><FontAwesomeIcon icon={faTwitter} /></Link>
          <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link href="#"><FontAwesomeIcon icon={faFacebook} /></Link>
        </div>
        <p>© 2020 Tripma incorporated</p>
      </div>
    </footer>
  );
}
