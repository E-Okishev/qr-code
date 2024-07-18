import {GENERATE_DATA} from "../../constants.js";
import {QRCodeSVG} from "qrcode.react";

import styles from "../ScanHistory/scanHistory.module.css";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

  return (
    <div>
      <h1>История генерирования</h1>
      <ul className={styles.scan__list}>
        {data.map((item, index) => (
          <li className={styles.scan__item} key={index}>
            <a className={styles.scan__link} href={item} target="_blank" rel="noopener noreferrer">
              {<QRCodeSVG value={item}/>}
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}