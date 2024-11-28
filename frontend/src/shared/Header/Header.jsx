import ProgressBar from './ProgressBar/ProgressBar';
import NavBar from './NavBar/NavBar';
import style from './Header.module.css';
const Header = () => {
  return (
    <header className={style.header}>
      <ProgressBar />
      <NavBar />
    </header>
  );
};
export default Header;
