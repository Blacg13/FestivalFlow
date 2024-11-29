import style from './AccordionItem.module.css';
import { useId, useState } from 'react';
import classnames from 'classnames';
import useSWR from 'swr';
import { fetchExhibitors } from '../../Services/fetchExhibitors';
const AccordionItem = ({
  thisExhibitor,
  title = '404, not found :-(',
  content = ['nothing', 'still nothing', 'nothing at all', 'empty, hè!'],
}) => {
  const [isActive, setActive] = useState(true);
  const clickHandler = () => {
    setActive(!isActive);
  };
  //* Requête : pour débuguer l'accordéon (peut-être)
  // const {
  //   data: content,
  //   error,
  //   isLoading,
  // } = useSWR(
  //   isActive ? `/api/exhibitors/${thisExhibitor._id}` : null,
  //   fetchExhibitors
  // );
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
            {isActive ? <p>{title} :</p> : <p>{title}</p>}
          </div>
          {isActive ? (
            <div className={style.accordionContent}>
              <ul>
                {content.map((note) => (
                  <li key={useId()}>{note}</li>
                ))}
              </ul>
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
