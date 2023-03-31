import style from './DataSource.module.css';
import PropTypes from 'prop-types';

/**
 * Component to display which data source is used to display charts
 * @property {string} source - Source of data for charts. It's either API or Mock data
 * @returns {React.ReactElement} Data source
 */

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
