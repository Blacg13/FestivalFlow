import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import img_navbar_list from '../../images/navbar-list.png';
import img_navbar_map from '../../images/navbar-map.png';
import img_navbar_committee from '../../images/navbar-committee.png';
import img_navbar_archives from '../../images/navbar-archives.png';
const NavBar = () => {
  return (
    <ul className={style.navbar}>
      <Link to={'/list'}>
        <li className={'listPage'}>
          <p>Exposants</p>
          <img src={img_navbar_list} alt='Home icon' />
        </li>
      </Link>
      <Link to={'/map'}>
        <li className={'mapPage'}>
          <p>Emplacements</p>
          <img src={img_navbar_map} alt='Map icon' />
        </li>
      </Link>
      <Link to={'/committee'}>
        <li className={'committeePage'}>
          <p>Comité</p>
          <img src={img_navbar_committee} alt='Committee icon' />
        </li>
      </Link>
      <Link to={'/archives'}>
        <li className={'archivesPage'}>
          <p>Archives</p>
          <img src={img_navbar_archives} alt='Archives icon' />
        </li>
      </Link>
    </ul>
  );
};
export default NavBar;
