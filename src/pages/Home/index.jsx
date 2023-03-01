// import { useParams } from 'react-router-dom';
import style from './Home.module.css';
import Header from '../../layouts/Header';
import Main from '../../layouts/Main';
import SideBar from '../../layouts/SideBar';

export default function Home() {
  // const { id } = useParams();

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
