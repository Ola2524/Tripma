import styles from "./HotelCard.module.css";

export default function HotelCard({ hotel, style }) {
  return (
    <div className={styles.hotel_card} style={style}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('/images/${hotel.img}')` }}
      ></div>
      <div className={styles.content}>
        <div className={styles.card_title}>
          <h3>{hotel.name}</h3>
          <span>$ {hotel.price}</span>
        </div>
        <p>{hotel.description}</p>
      </div>
    </div>
  );
}
