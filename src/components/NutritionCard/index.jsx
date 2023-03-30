/* eslint-disable @typescript-eslint/no-unused-vars */
import style from './NutritionCard.module.css';
import PropTypes from 'prop-types';

/**
 * Component to display nutrition card
 *
 * @property {Object} children - SVG elements to display icon
 * @property {string} value - The nutrition value to be displayed in the card
 * @property {string} nutrition - The type of nutrition to be displayed in the card
 */

export default function NutritionCard(props) {
  return (
    <div className={style.cardWrap}>
      <div className={style.iconWrap}>{props.children}</div>
      <div className={style.nutritionInfo}>
        <span className={style.nutriValue}>{props.value}</span>
        <span className={style.nutrition}>{props.nutrition}</span>
      </div>
    </div>
  );
}

NutritionCard.propTypes = {
  children: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  nutrition: PropTypes.string.isRequired,
};
