import style from './ProgressBar.module.css';
const ProgressBar = () => {
  return (
    <>
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
    </>
  );
};
export default ProgressBar;
