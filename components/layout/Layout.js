import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>CAR STORE</h2>
          <p style={{ textAlign: "center" }}>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/Sepehr-Narimani" target="_blank" rel="noopener">
          Sepehr Narimani
        </a>{" "} |
        Car Store Project &copy;2023
      </footer>
    </>
  );
}

export default Layout;
