import {useState} from "react";
import {QRCodeSVG} from 'qrcode.react';

import s from './qrCodeGenerator.module.css'
import {GENERATE_DATA} from "../../constants.js";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  const onClickHandler = () => {

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value]))

    setResult(value);
    setValue('')
  }

  const onChangeHandler = (evt) => {
    setValue(evt.target.value)
    setResult('')
  }

  return (
    <div className={s.container}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeHandler}/>
      <button
        className={s.button}
        type="button"
        onClick={onClickHandler}
      >
        Сгенерировать QR
      </button>
      {result !== "" && <QRCodeSVG value={value}/>}

    </div>
  )
}