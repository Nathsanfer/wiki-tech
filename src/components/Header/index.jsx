import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
          <h1>WIKI-TECH</h1>
          <span>💻</span>
        </div>
        <nav className={styles.nav}>
          <a href="/" className={styles.active}>
            HOME
          </a>
        </nav>

        <div className={styles.userActions}>
          <button className={styles.notificationBtn}>🔔</button>
        </div>
      </header>
    )
}

export default Header;