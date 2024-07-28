import {Link} from "react-router-dom";

import styles from "./nav.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} to="/qr-code/generate">Генерировать QR code</Link>
      <Link className={styles.link} to="/qr-code/scan">Сканировать QR code</Link>
      <Link className={styles.link} to="/qr-code/generate-history">История гененирования</Link>
      <Link className={styles.link} to="/qr-code/scan-history">История сканирования</Link>
    </nav>
  )
}