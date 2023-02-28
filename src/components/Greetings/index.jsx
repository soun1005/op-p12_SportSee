import React from 'react';
import PropTypes from 'prop-types';
import style from './Greetings.module.css';

export default function Greetings(props) {
  const { name } = props;
  return (
    <div className={style.container}>
      <h1>Bonjour {name}</h1>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </div>
  );
}
Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};
