import {Routes, Route} from "react-router-dom";
import {QrCodeGenerator} from "./components/Generate/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./components/Scan/QrCodeScanner.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {GenerateHistory} from "./components/GenerateHistory/GenerateHistory.jsx";
import {ScanHistory} from "./components/ScanHistory/ScanHistory.jsx";

import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.app}>
      <Navigation/>
      <Routes>
        <Route path="/qr-code/generate" element={<QrCodeGenerator/>}/>
        <Route path="/qr-code/scan" element={<QrCodeScanner/>}/>
        <Route path="/qr-code/generate-history" element={<GenerateHistory/>}/>
        <Route path="/qr-code/scan-history" element={<ScanHistory/>}/>
      </Routes>
    </div>
  )
}

