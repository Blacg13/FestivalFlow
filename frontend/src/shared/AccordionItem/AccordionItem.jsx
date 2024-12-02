import style from './AccordionItem.module.css';
import { useEffect, useId, useState } from 'react';
import classnames from 'classnames';
import useSWR from 'swr';
import {
  fetchExhibitors,
  fetchThisExhibitor,
} from '../../Services/fetchExhibitors.js';
const AccordionItem = ({
  thisExhibitor,
  title = '404, not found :-(',
  request = ['nothing', 'still nothing', 'nothing at all', 'empty, hè!'],
}) => {
  const {
    data: thisExhibitorData,
    isLoading,
    error,
  } = useSWR(`exhibitors/${thisExhibitor}`, fetchThisExhibitor);
  if (isLoading) return <isLoading />;
  else if (error) {
    return <Error />;
  } else {
    console.log('thisExhibitorData', thisExhibitorData);
    const content = thisExhibitorData[request];
    console.log('content', content);

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
  }
};
export default AccordionItem;
