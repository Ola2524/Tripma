import styles from "./PriceGrid.module.css";

export default function Filter() {
  return (
    <div className={styles.price_grid}>
      <h4>Price grid (flexible dates)</h4>
      <table>
        <thead>
          <th>{""}</th>
          <th>2/12</th>
          <th>2/13</th>
          <th>2/14</th>
          <th>2/15</th>
          <th>2/16</th>
        </thead>
        <tbody>
          <tr>
            <td>3/7</td>
            <td>$837</td>
            <td>$592</td>
            <td>$592</td>
            <td>$1,308</td>
            <td>$837</td>
          </tr>
          <tr>
            <td>3/8</td>
            <td>$837</td>
            <td>$592</td>
            <td>$592</td>
            <td>$837</td>
            <td>$1,308</td>
          </tr>
          <tr>
            <td>3/8</td>
            <td>$837</td>
            <td>$592</td>
            <td>$592</td>
            <td>$837</td>
            <td>$1,308</td>
          </tr>
          <tr>
            <td>3/8</td>
            <td>$837</td>
            <td>$592</td>
            <td>$592</td>
            <td>$837</td>
            <td>$1,308</td>
          </tr>
          <tr>
            <td>3/8</td>
            <td>$837</td>
            <td>$592</td>
            <td>$592</td>
            <td>$837</td>
            <td>$1,308</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
