import Link from "next/link";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Tripme
      </Link>
      <button type="button" className={styles.toggleBtn}><FontAwesomeIcon icon={faBars} /></button>
      <ul className={styles.links}>
        <li>
          <Link href="/flights">Flights</Link>
        </li>
        <li>
          <Link href="/hotels">Hotels</Link>
        </li>
        <li>
          <Link href="/packages">Packages</Link>
        </li>
        <li>
          <Link href="/signin">Sign in</Link>
        </li>
        <li className={styles.signup_btn}>
          <Link href="/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}
