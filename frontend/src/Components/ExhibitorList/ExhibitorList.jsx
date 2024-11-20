import React from 'react';
import style from './ExhibitorList.module.css';
import useSWR from 'swr';
import { fetchExhibitors } from '../../Services/fetchExhibitors.js';

const ExhibitorList = ({ format, groupby }) => {
  const { data, isLoading, error } = useSWR('exhibitors', fetchExhibitors);
  if (isLoading) {
    return (
      <div className='isLoading'>
        <p>Chargement...</p>
      </div>
    );
  } else if (error) {
    console.log(error.status + error.message);
    return (
      <div className='fetchError'>
        <p>Il semblerait qu'il y ait eu une erreur...</p>
      </div>
    );
  }
  switch (format) {
    case 'div':
      return (
        <div className={style.exhibitorList}>
          <p>prout</p>
        </div>
      );
      break;

    default:
      return (
        <div className={style.exhibitorList}>
          <p>pouet</p>
        </div>
      );
      break;
  }
};
export default ExhibitorList;
