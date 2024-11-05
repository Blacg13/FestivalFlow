import { Link, Route, useLocation } from 'react-router-dom';
import style from './NavBar.module.css';
const NavBar = () => {
  const location = useLocation();
  return (
    <ul className={style.navbar}>
      <li
        className={
          location.pathname === '/' ? style.currentPage : style.notCurrentPage
        }
      >
        <Link to={'/'}>
          <img src='../../Assets/information.png' alt='Home page icon' />
          <p>Home</p>
        </Link>
      </li>
      <li
        className={
          location.pathname === '/map'
            ? style.currentPage
            : style.notCurrentPage
        }
      >
        <Link to={'/map'}>
          <img src='../../Assets/download.png' alt='Map page icon' />
          <p>Map</p>
        </Link>
      </li>
      <li
        className={
          location.pathname === '/committee'
            ? style.currentPage
            : style.notCurrentPage
        }
      >
        <Link to={'/committee'}>
          <img src='../../Assets/information.png' alt='Committee page icon' />
          <p>Committee</p>
        </Link>
      </li>
      <li
        className={
          location.pathname === '/archives'
            ? style.currentPage
            : style.notCurrentPage
        }
      >
        <Link to={'/archives'}>
          <img src='../../Assets/information.png' alt='Archives page icon' />
          <p>Archives</p>
        </Link>
      </li>
    </ul>
  );
};
export default NavBar;
