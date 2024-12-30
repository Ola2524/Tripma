import styles from "./PriceGrid.module.css";
import Chart from "../../ui/chart/Chart";

export default function PriceGrid() {
  return (
    <div className={styles.price_grid}>
      <h4>Price grid (flexible dates)</h4>
      <table>
        <thead>
          <tr>
            <th>{""}</th>
            <th>2/12</th>
            <th>2/13</th>
            <th>2/14</th>
            <th>2/15</th>
            <th>2/16</th>
          </tr>
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
      <div className={styles.price_chart}>
        <h4>Price history</h4>
        <Chart />
      </div>
      <div className={styles.price_rate}>
        <h4>
          Price rating <span>Buy soon</span>
        </h4>
        <p>
          We recommend booking soon. The average cost of this flight is $750,
          but could rise 18% to $885 in two weeks.
        </p>
        <p>
          Tripma analyzes thousands of flights, prices, and trends to ensure you
          get the best deal.
        </p>
      </div>
    </div>
  );
}
