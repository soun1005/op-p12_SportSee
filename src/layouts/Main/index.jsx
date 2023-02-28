import style from './Main.module.css';
// components
import NutritionCard from '../../components/NutritionCard';
import Greetings from '../../components/Greetings';
import Barchart from '../../components/Graphes/Barchart';
import Linechart from '../../components/Graphes/Linechart';

// icons
import { ReactComponent as FireIcon } from '../../assets/nutritionCardIcons/fire-icon.svg';
import { ReactComponent as AppleIcon } from '../../assets/nutritionCardIcons/apple-icon.svg';
import { ReactComponent as ChickenIcon } from '../../assets/nutritionCardIcons/chicken-icon.svg';
import { ReactComponent as BurgerIcon } from '../../assets/nutritionCardIcons/cheeseburger-icon.svg';

export default function Main() {
  return (
    <div className={style.container}>
      <Greetings name="Soeun" />
      {/* all charts in chartContainer */}
      <div className={style.mainWrap}>
        <div className={style.chartContainer}>
          <Barchart />
          <Linechart />
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
  );
}
