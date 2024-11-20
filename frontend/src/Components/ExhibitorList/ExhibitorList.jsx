import React from 'react';
import style from './ExhibitorList.module.css';
import useSWR from 'swr';
import { fetchExhibitors } from '../../Services/fetchExhibitors.js';
import { fetchIndividuals } from '../../Services/fetchIndividuals.js';

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
        <ul className={style.exhibitorListDiv}>
          {exhibitorsData.map((exhibitor) => {
            return (
              <li key={exhibitor._id} className={style.exhibitorLI}>
                <div>
                  <h3>{exhibitor.businessName ?? exhibitor.personRef.name}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      );
      break;

    default:
      return (
        <ul className={style.exhibitorListDefault}>
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
