import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faCalendar,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
  return (
    <div className={styles.filter}>
      <form className={styles.filter_form}>
        <div className={styles.place_field}>
          <label htmlFor="from">
            <FontAwesomeIcon icon={faPlaneDeparture} />
          </label>
          <select name="from" id="from" defaultValue="">
            <option value="" disabled>
              From Where?
            </option>
            <option value="SFO">SFO</option>
            <option value="ATL">ATL</option>
            <option value="LAX">LAX</option>
          </select>
        </div>
        <div className={styles.place_field}>
          <label htmlFor="to">
            <FontAwesomeIcon icon={faPlaneArrival} />
          </label>
          <select name="to" id="to" defaultValue="">
            <option value="" disabled>
              From Where?
            </option>
            <option value="SFO">SFO</option>
            <option value="ATL">ATL</option>
            <option value="LAX">LAX</option>
          </select>
        </div>
        <button className={styles.date}>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Departure - Return</span>
        </button>
        <button className={styles.passenger_num}>
        <FontAwesomeIcon icon={faUser} />
        <span>1 adult</span>
        </button>
        <button className={styles.search} type="submit">Search</button>
      </form>
    </div>
  );
}
