import {Link} from "react-router-dom";

import styles from "./nav.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} to="/generate">Генерировать QR code</Link>
      <Link className={styles.link} to="/scan">Сканировать QR code</Link>
      <Link className={styles.link} to="/generate-history">История гененирования</Link>
      <Link className={styles.link} to="/scan-history">История сканирования</Link>
    </nav>
  )
}