import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Login.module.css';
import logo from '../../assets/letterLogo.png';

const users = [
  { id: 12, userName: 'User 12' },
  { id: 18, userName: 'User 18' },
];

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="logo" className={style.img} />
      </div>
      <div className={style.mainWrap}>
        <div className={style.title}>
          <h2>Choose a user to connect to dashboard</h2>
        </div>
        <div className={style.optionWrap}>
          <div className={style.buttonContainer}>
            {users.map((user) => (
              <NavLink to={`user/${user.id}`} key={user.id}>
                <button key={user.id} className={style.loginBtn}>
                  {user.userName}
                </button>
              </NavLink>
            ))}
          </div>
          <div className={style.checkBoxWrap}>
            <span className={style.checkQuestion}>
              Check if you want to use a Mock API rather than API
            </span>
            <br />
            <input
              type="checkbox"
              id="apiBtn"
              value="API"
              name="dataType"
              className={style.checkBox}
            />
            <label htmlFor="apiBtn">I want to use Mock API</label>
          </div>
        </div>
      </div>
    </div>
  );
}
