// import { useState } from "react";
import style from './Mini.Form.module.css';

const MiniForm = () => {
  // ctrl / ==> commenter le code
  // const [input, setInput] = useState(null);

  return (
    <div className={style.minidiv}>
      <p>Mini form</p>
      <input type='text' className={'miniInput'} />
    </div>
  );
};
export default MiniForm;
