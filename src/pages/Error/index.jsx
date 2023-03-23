import { NavLink } from 'react-router-dom';
import style from './Error.module.css';

export default function Error404() {
  return (
    <div className={style.container}>
      <div className={style.textWrap}>
        <span className={style.error}>404</span>
        <span className={style.errorMessage}>
          Oups! La page que vous demandez n `&apos;`existe pas.
        </span>
      </div>
      <NavLink to="/" className={style.linkToHome}>
        Retourner sur la page d `&apos;`accueil
      </NavLink>
    </div>
  );
}
