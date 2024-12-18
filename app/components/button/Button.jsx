import styles from "./Button.module.css";

export default function Button({ text, customStyle, action }) {
  return (
    <button
      type="button"
      onClick={action}
      className={styles.btn}
      style={{ customStyle }}
    >
      {text}
    </button>
  );
}
