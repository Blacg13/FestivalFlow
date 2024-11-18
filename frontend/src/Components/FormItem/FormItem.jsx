// import { useState } from "react";
import style from './Mini.Form.module.css';

const MiniForm = ({
  inputName,
  serverDataValue,
  inputType = 'text',
  tabindex = positive,
}) => {
  return (
    <div className={style.minidiv}>
      <label htmlFor={inputName}>{inputName} :</label>
      <input
        className={style.hiddenput}
        type={inputType}
        name={inputName}
        value={serverDataValue ?? inputName}
        placeholder={serverDataValue ?? inputName}
        tabIndex={tabindex}
      />
    </div>
  );
};
export default MiniForm;
