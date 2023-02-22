/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import style from './NutritionCard.module.css';

export default function NutritionCard(props) {
  return (
    <div className={style.cardWrap}>
      <div className={style.iconWrap}>{props.children}</div>
      <div className={style.nutritionInfo}>
        <span>{props.value}</span>
        <span>{props.nutrition}</span>
      </div>
    </div>
  );
}
