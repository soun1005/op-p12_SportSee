import { ReactComponent as Logo } from '../../assets/sportseelogo.svg';
import style from './Header.module.css';

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <Logo width={135} className={style.logo} />
      </div>
      <nav className={style.nav}>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Reglage</li>
          <li>Communaute</li>
        </ul>
      </nav>
    </div>
  );
}
