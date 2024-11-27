import React from 'react';
import { Link } from 'react-router-dom';
import style from './ExhibitorList.module.css';
import useSWR from 'swr';
import { fetchExhibitors } from '../../Services/fetchExhibitors.js';
import IsLoading from '../../shared/IsLoading/IsLoading.jsx';
import Error from '../../shared/Error/Error.jsx';
import LastEmail from './Components/LastEmail/LastEmail.jsx';
import ExhibitorName from './Components/ExhibitorName/ExhibitorName.jsx';
import AddExhibitor from './Components/AddExhibitor/AddExhibitor.jsx';

const ExhibitorList = ({ format, defineFilter, defineSort, defineOrder }) => {
  const {
    data: exhibitorsData,
    isLoading,
    error,
  } = useSWR('exhibitors', fetchExhibitors);

  if (isLoading) return <IsLoading />;
  if (error) return <Error />;

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
            return (
              <li key={'ExhibitorLIdiv_' + exhibitor._id}>
                <Link
                  key={'ExhibitorLink_' + exhibitor._id}
                  to={'/exhibitor/' + exhibitor._id}
                  className={style.exhibitorLI}
                >
                  <div className={style.exitem}>
                    <ExhibitorName
                      exhibitor={exhibitor}
                      individual={exhibitor.personRef}
                    />
                    <LastEmail exhibitor={exhibitor} />
                  </div>
                </Link>
              </li>
            );
          })}
          {/* todo: ajouter <Link to> vers le formulaire */}
          <li key={'AddExhibitor'} className={style.exhibitorLI}>
            <div className={style.exitem}>
              <AddExhibitor />
            </div>
          </li>
        </ul>
      );
      break;

    default:
      return (
        <ul className={style.formatDefault}>
          {exhibitorsData.map((exhibitor) => {
            return (
              <li key={'ExhibitorLIp_' + exhibitor.id}>
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
