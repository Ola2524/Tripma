import styles from "./FilghtDeals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function FilghtDeals() {
  return (
    <div>
      <div className={styles.header}>
        <h2>
          Find your next adventure with these <span>flight deals</span>
        </h2>
        <Link href="hotels">
          <button>
            All <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>
      </div>
    </div>
  );
}
