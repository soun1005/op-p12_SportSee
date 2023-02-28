import style from './Main.module.css';
// components
import NutritionCard from '../../components/NutritionCard';
import Greetings from '../../components/Greetings';
import Activity from '../../components/Graphes/Activity';
import AverageSession from '../../components/Graphes/AverageSession';
import Performance from '../../components/Graphes/Performance';
import Score from '../../components/Graphes/Score';

// icons
import { ReactComponent as FireIcon } from '../../assets/nutritionCardIcons/fire-icon.svg';
import { ReactComponent as AppleIcon } from '../../assets/nutritionCardIcons/apple-icon.svg';
import { ReactComponent as ChickenIcon } from '../../assets/nutritionCardIcons/chicken-icon.svg';
import { ReactComponent as BurgerIcon } from '../../assets/nutritionCardIcons/cheeseburger-icon.svg';

export default function Main() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <Greetings name="Soeun" />
        {/* all charts in chartContainer */}
        <div className={style.mainWrap}>
          <div className={style.chartContainer}>
            <Activity />
            <div className={style.bottomCharts}>
              <AverageSession />
              <Performance />
              <Score />
            </div>
          </div>
          <div className={style.cardWrap}>
            <NutritionCard value="calories" nutrition="Calories">
              <FireIcon />
            </NutritionCard>
            <NutritionCard value="protein" nutrition="Proteins">
              <ChickenIcon />
            </NutritionCard>
            <NutritionCard value="glucide" nutrition="Glucides">
              <AppleIcon />
            </NutritionCard>
            <NutritionCard value="lipid" nutrition="Lipides">
              <BurgerIcon />
            </NutritionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
