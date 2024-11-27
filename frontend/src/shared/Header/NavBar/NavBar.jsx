import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import img_navbar_list from '../../../assets/images/icons/navbar-list.png';
import img_navbar_map from '../../../assets/images/icons/navbar-map.png';
import img_navbar_committee from '../../../assets/images/icons/navbar-committee.png';
import img_navbar_archives from '../../../assets/images/icons/navbar-archives.png';
const NavBar = () => {
  return (
    <ul className={style.navbar}>
      <li className={'listPage'}>
        <Link className={style.link} to={'/exhibitors'}>
          <p>Exposants</p>
          <img src={img_navbar_list} alt='Home icon' />
        </Link>
      </li>
      <li className={'mapPage'}>
        <Link className={style.link} to={'/map'}>
          <p>Emplacements</p>
          <img src={img_navbar_map} alt='Map icon' />
        </Link>
      </li>
      <li className={'committeePage'}>
        <Link className={style.link} to={'/committee'}>
          <p>Comité</p>
          <img src={img_navbar_committee} alt='Committee icon' />
        </Link>
      </li>
      <li className={'archivesPage'}>
        <Link className={style.link} to={'/archives'}>
          <p>Archives</p>
          <img src={img_navbar_archives} alt='Archives icon' />
        </Link>
      </li>
    </ul>
  );
};
export default NavBar;
