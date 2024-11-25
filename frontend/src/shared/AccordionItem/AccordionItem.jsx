import style from './AccordionItem.module.css';
import { useState } from 'react';
import classnames from 'classnames';
const AccordionItem = () => {
  const [isActive, setActive] = useState(true);
  const clickHandler = () => {
    setActive(!isActive);
  };
  return (
    <>
      <section
        className={classnames(
          isActive ? style.noteOpenStyle : style.noteClosedStyle,
          style.accordionBG
        )}
      >
        <div className={style.accordionItem}>
          <div className={style.accordionTitle} onClick={clickHandler}>
            {isActive ? <p>{'Accordion Item'} :</p> : <p>{'Accordion Item'}</p>}
          </div>
          {isActive ? (
            <div className={style.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              doloribus cum quaerat, unde culpa facere nisi? In repellendus
              sequi obcaecati quod sed facilis perferendis doloribus ut nihil
              fuga, iure minus!
            </div>
          ) : (
            <div className={style.accordionTriangle}></div>
          )}
        </div>
      </section>
    </>
  );
};
export default AccordionItem;
