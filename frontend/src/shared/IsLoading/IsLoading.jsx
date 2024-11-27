import style from './IsLoading.module.css';
function IsLoading({ message = 'Chargement...' }) {
  return (
    <div className={style.isLoading}>
      <div className={style.loader}></div>
      <p>{message}</p>
    </div>
  );
}

export default IsLoading;
