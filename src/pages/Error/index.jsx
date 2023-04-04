import { NavLink } from 'react-router-dom';
import style from './Error.module.css';
import Header from '../../layouts/Header';
import SideBar from '../../layouts/SideBar';

/**
 * A React component that renders the error page when a 404 error occurs
 * @returns {JSX.Element} - A JSX element representing the error page
 */

export default function Error() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header />
      </header>
      <main className={style.main}>
        <SideBar />
        <div className={style.errorContainer}>
          <div className={style.textWrap}>
            <span className={style.error}>404</span>
            <span className={style.errorMessage}>
              Oops! La page que vous demandez n&apos;existe pas.
            </span>
          </div>
          <NavLink to="/" className={style.linkToHome}>
            Retourner sur la page de Login
          </NavLink>
        </div>
      </main>
    </div>
  );
}
