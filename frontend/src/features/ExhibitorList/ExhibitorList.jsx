import React from 'react';
import style from './ExhibitorList.module.css';
import useSWR from 'swr';
import { fetchExhibitors } from '../../Services/fetchExhibitors.js';
import { fetchIndividuals } from '../../Services/fetchIndividuals.js';
import LastEmail from './Components/LastEmail/LastEmail.jsx';
import ExhibitorName from './Components/ExhibitorName/ExhibitorName.jsx';
// import { img } from '/public/exhibitors-icons/';

const ExhibitorList = ({ format, defineFilter, defineSort, defineOrder }) => {
  const {
    data: exhibitorsData,
    isLoading: exhibitorsIsLoading,
    error: exhibitorsError,
  } = useSWR('exhibitors', fetchExhibitors);
  const {
    data: individualsData,
    isLoading: individualsIsLoading,
    error: individualsError,
  } = useSWR('individuals', fetchIndividuals);
  if (exhibitorsIsLoading && individualsIsLoading) {
    return (
      <div className='isLoading'>
        <p>Chargement...</p>
      </div>
    );
  } else if (exhibitorsError || individualsError) {
    console.log(error.status + error.message);
    return (
      <div className='fetchError'>
        <p>Il semblerait qu'il y ait eu une erreur...</p>
      </div>
    );
  } else {
    console.log('exhibitors list: ', exhibitorsData);
    console.log(exhibitorsData.personRef);
  }
  // const [filter, setFilter] = useState(undefined);
  // const [sort, setSort] = useState(undefined);
  // const [order, setOrder] = useState(undefined);
  // const defineFilter = () => {
  //   setFilter(filter);
  //   console.log('filter defined', filter);
  // };
  // const defineSort = () => {
  //   setSort(sort);
  //   console.log('sort defined', sort);
  // };
  // const defineOrder = () => {
  //   setOrder(order);
  //   console.log('order defined', order);
  // };

  switch (format) {
    case 'div':
      return (
        <ul className={style.formatDiv}>
          {exhibitorsData.map((exhibitor) => {
            console.log('exhibitor: ', exhibitor);

            //! bugging
            return (
              <li key={exhibitor._id} className={style.exhibitorLI}>
                <div className={style.exitem}>
                  <ExhibitorName
                    exhibitor={exhibitor}
                    individual={exhibitor.personRef}
                  />
                  <LastEmail exhibitor={exhibitor} />
                </div>
              </li>
            );
          })}
        </ul>
      );
      break;

    default:
      return (
        <ul className={style.formatDefault}>
          {exhibitorsData.map((exhibitor) => {
            return (
              <li key={exhibitor.id}>
                <div>
                  <p>pouet pouet</p>
                </div>
              </li>
            );
          })}
        </ul>
      );
      break;
  }
};
export default ExhibitorList;