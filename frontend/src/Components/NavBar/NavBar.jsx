import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
const NavBar = () => {
  return (
    <ul className={style.navbar}>
      <Link to={'/list'}>
        <li className={'listPage'}>
          <p>Home</p>
          <img src='../../Assets/information.png' alt='Home icon' />
        </li>
      </Link>
      <Link to={'/map'}>
        <li className={'mapPage'}>
          <p>Map</p>
          <img src='../../Assets/download.png' alt='Map icon' />
        </li>
      </Link>
      <Link to={'/committee'}>
        <li className={'committeePage'}>
          <p>Committee</p>
          <img src='../../Assets/information.png' alt='Committee icon' />
        </li>
      </Link>
      <Link to={'/archives'}>
        <li className={'archivesPage'}>
          <p>Archives</p>
          <img src='../../Assets/information.png' alt='Archives icon' />
        </li>
      </Link>
    </ul>
  );
};
export default NavBar;
