import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/sportseelogo.svg';
import style from './Header.module.css';

/** A React component that renders the header section of the page
 *@returns {JSX.Element} - A JSX element representing the header section of the page
 */

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <NavLink to={'/'}>
          <Logo width={135} className={style.logo} />
        </NavLink>
      </div>
      <nav className={style.nav}>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </div>
  );
}
