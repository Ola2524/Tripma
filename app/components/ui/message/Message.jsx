import styles from "./Message.module.css";

export default function Message({ children, type }) {
  return (
    <div className={`${styles.message} ${(type === "error") && styles.error}`}>
      <span>{children}</span>
    </div>
  );
}
