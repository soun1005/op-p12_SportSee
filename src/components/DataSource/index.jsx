import style from './DataSource.module.css';
import PropTypes from 'prop-types';

export default function DataSource(props) {
  return (
    <div className={style.container}>
      <span className={style.dataSign}>Using data from :</span>
      <span className={style.dataSource}> {props.source} </span>
    </div>
  );
}

DataSource.propTypes = {
  source: PropTypes.string.isRequired,
};
