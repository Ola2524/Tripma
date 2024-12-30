import styles from "./page.module.css";

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.nav}>
        <button type="button" className={styles.menuBtn}>
          <img src="/images/menu.png" alt="burger menu" />
        </button>
        <div className={styles.logo}>Tripma</div>
      </nav>
      {children}
    </>
  );
}
