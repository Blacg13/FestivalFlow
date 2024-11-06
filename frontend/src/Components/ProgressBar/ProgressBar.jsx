import style from './ProgressBar.module.css';
const ProgressBar = () => {
  //todo: librairie pour aller scroller de manière smooth vers la div correspondante
  return (
    <>
      <div className={style.progressDiv}>
        <ul className={style.progressArrow}>
          {/**=== ProgressBar ===**
           * todo: boucle avec un tableau
           *
           * **/}
          <li>
            <div>
              <img src='' alt='' />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ProgressBar;
