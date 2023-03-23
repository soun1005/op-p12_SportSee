import React from 'react';
import PropTypes from 'prop-types';
import style from './Greetings.module.css';

export default function Greetings(props) {
  const { name } = props;
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <span className={style.greetings}>Bonjour</span>
        <span className={style.name}>{name}</span>
      </div>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </div>
  );
}
Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};
