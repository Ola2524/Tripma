import Filter from "../../widgets/filter/Filter";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>
        It’s more than
        <br />
        just a trip
      </h1>
      <Filter />
    </div>
  );
}
