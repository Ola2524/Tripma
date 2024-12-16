import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Tripme
      </Link>
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
