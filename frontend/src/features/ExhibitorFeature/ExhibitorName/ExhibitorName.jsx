import style from './ExhibitorName.module.css';

const ExhibitorName = ({ thisExhibitor }) => {
  const personRef = thisExhibitor.personRef.map((individual) => individual);
  //! attention, je dois pouvoir mettre la personne de référence en index 0 alors !!
  return (
    <div className={style.exhibitorName}>
      <img
        className={style.exhibitorIcon}
        src={`/exhibitors-icons/${thisExhibitor.job}-icons/${thisExhibitor.image}`}
        alt={'image pour ' + thisExhibitor.specialty}
      />
      <div className={style.titles}>
        {thisExhibitor.businessName ? (
          <h3>
            {thisExhibitor.businessName}
            <i>
              {' (' +
                personRef[0].name.first +
                ' ' +
                personRef[0].name.last +
                ')'}
            </i>
          </h3>
        ) : (
          <h3>{personRef[0].name.first + ' ' + personRef[0].name.last}</h3>
        )}
        <h4>{thisExhibitor.specialty}</h4>
      </div>
    </div>
  );
};

export default ExhibitorName;
