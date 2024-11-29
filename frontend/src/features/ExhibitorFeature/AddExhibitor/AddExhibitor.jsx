import style from './AddExhibitor.module.css';

const AddExhibitor = () => {
  return (
    <>
      <div className={style.plusSymbol}>
        <div className={style.plusVertical}></div>
        <div className={style.plusHorizontal}></div>
      </div>
      <h4>Ajouter un exposant</h4>
    </>
  );
};

export default AddExhibitor;
