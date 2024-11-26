import style from './ExhibitorName.module.css';
import useSWR from 'swr';
import { fetchExhibitors } from '/src/services/fetchExhibitors.js';
import { fetchIndividuals } from '/src/services/fetchIndividuals.js';

const ExhibitorName = ({ exhibitor, individual }) => {
  console.log('prout prout' + individual);
  const thisIndividual = individual.find(
    (indiv) => indiv._id === exhibitor.personRef
  );
  return (
    <div className={style.exhibitorName}>
      <img
        className={style.exhibitorIcon}
        src={`/public/exhibitors-icons/${exhibitor.job}-icons/${exhibitor.image}`}
        alt={'image pour ' + exhibitor.specialty}
      />
      <div className={style.titles}>
        <h3>{exhibitor.businessName ?? 'pouet'}</h3>
        <h4>{exhibitor.specialty}</h4>
      </div>
    </div>
  );
};

export default ExhibitorName;
