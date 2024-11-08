import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import NavBar from '../../Components/NavBar/NavBar';
import style from './Header.module.css';
const Header = () => {
  return (
    <div className={style.header}>
      <ProgressBar />
      <NavBar />
    </div>
  );
};
export default Header;
