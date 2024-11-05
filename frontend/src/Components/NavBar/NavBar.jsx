import { Link, useLocation } from 'react-router-dom';
import style from './NavBar.module.css';
const NavBar = () => {
  const location = useLocation();
  return (
    <ul className={style.navbar}>
      <li className={location.pathname === '/' && style.currentPage}>
        <Link to={'/frontend/src/Containers/Index/Index.jsx'}>
          <img src='../../Assets/information.png' alt='Home page icon' />
          <p>Home</p>
        </Link>
      </li>
      <li className={location.pathname === '/map' && style.currentPage}>
        <Link to={'/frontend/src/Containers/MapPage/MapPage.jsx'}>
          <img src='../../Assets/download.png' alt='Map page icon' />
          <p>Map</p>
        </Link>
      </li>
    </ul>
  );
};
export default NavBar;
