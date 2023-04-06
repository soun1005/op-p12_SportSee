import { NavLink } from 'react-router-dom';
import style from './Login.module.css';
import logo from '../../assets/letterLogo.png';
import { useState } from 'react';

const users = [
  { id: 12, userName: 'User 12' },
  { id: 18, userName: 'User 18' },
];

/**
 * A React component that renders login page
 * @returns {JSX.Element} - A JSX element of combined components to display login page
 */

export default function Login() {
  const [check, setChecked] = useState(true);

  const searchParam = `?api=${check}`;

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="logo" className={style.img} />
      </div>
      <div className={style.mainWrap}>
        <div className={style.title}>
          <h2>Choisir un utilisateur pour se connecter au dashboard</h2>
        </div>
        <div className={style.optionWrap}>
          <div className={style.checkBoxWrap}>
            <div className={style.questionWrap}>
              <span className={style.checkQuestion}>
                Vous voulez utilisez API? <br />
              </span>
              <span className={style.secondQuestion}>
                Décochez si vous voulez utiliser Mock API
                <br />
                <br />
              </span>
            </div>
            <input
              type="checkbox"
              id="apiBtn"
              name="dataType"
              className={style.checkBox}
              onChange={(e) => setChecked(e.target.checked)}
              checked={check}
            />
            <label htmlFor="apiBtn">Oui</label>
            <div className={style.buttonContainer}>
              {users.map((user) => (
                <NavLink to={`user/${user.id}${searchParam}`} key={user.id}>
                  <button key={user.id} className={style.loginBtn}>
                    {user.userName}
                  </button>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
