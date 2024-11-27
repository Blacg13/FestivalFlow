import style from './ExhibitorName.module.css';

const ExhibitorName = ({ exhibitor }) => {
  const personRef = exhibitor.personRef.map((individual) => individual);
  //! attention, je dois pouvoir mettre la personne de référence en index 0 alors !!
  return (
    <div className={style.exhibitorName}>
      <img
        className={style.exhibitorIcon}
        src={`/public/exhibitors-icons/${exhibitor.job}-icons/${exhibitor.image}`}
        alt={'image pour ' + exhibitor.specialty}
      />
      <div className={style.titles}>
        {exhibitor.businessName ? (
          <h3>
            {exhibitor.businessName}
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
        <h4>{exhibitor.specialty}</h4>
      </div>
    </div>
  );
};

export default ExhibitorName;
