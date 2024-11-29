import ExhibitorName from '../ExhibitorName/ExhibitorName';
import style from './IdentityItem.module.css';
const IdentityItem = ({ thisExhibitor }) => {
  return (
    <div className={style.identityItem}>
      <ExhibitorName thisExhibitor={thisExhibitor} />
      <div className={style.individuals}>
        <ul>
          {thisExhibitor.personRef.map((individual) => (
            <li key={individual._id}>
              {individual.name.first + ' ' + individual.name.last}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IdentityItem;
