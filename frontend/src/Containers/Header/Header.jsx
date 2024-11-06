import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import NavBar from '../../Components/NavBar/NavBar';
import style from './Header.module.css';
const Header = () => {
  return (
    <section className={style.header}>
      <ProgressBar />
      <NavBar />
    </section>
  );
};
export default Header;
