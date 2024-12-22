import styles from "./Button.module.css";

export default function Button({ text, customStyle, action, className }) {
  return (
    <button
      type="button"
      onClick={action}
      className={`${styles.btn} ${styles.className}`}
      style={customStyle}
    >
      {text}
    </button>
  );
}
