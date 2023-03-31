// import { useParams } from 'react-router-dom';
import style from './Home.module.css';
import Header from '../../layouts/Header';
import Main from '../../layouts/Main';
import SideBar from '../../layouts/SideBar';

/**
 * A React component that renders home page
 * @returns {JSX.Element} - A JSX element of combined components to display dashboard(Home)
 */

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <Header />
      </header>
      <main className={style.main}>
        <SideBar />
        <Main />
      </main>
    </>
  );
}
