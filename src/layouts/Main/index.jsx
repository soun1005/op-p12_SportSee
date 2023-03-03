import style from './Main.module.css';
// components
import NutritionCard from '../../components/NutritionCard';
import Greetings from '../../components/Greetings';
import Activity from '../../components/Graphes/Activity';
import AverageSession from '../../components/Graphes/AverageSession';
import Performance from '../../components/Graphes/Performance';
import Score from '../../components/Graphes/Score';
import useFetch from '../../hooks/useFetch';

// icons
import { ReactComponent as FireIcon } from '../../assets/nutritionCardIcons/fire-icon.svg';
import { ReactComponent as AppleIcon } from '../../assets/nutritionCardIcons/apple-icon.svg';
import { ReactComponent as ChickenIcon } from '../../assets/nutritionCardIcons/chicken-icon.svg';
import { ReactComponent as BurgerIcon } from '../../assets/nutritionCardIcons/cheeseburger-icon.svg';

export default function Main() {
  const { data, loading, error } = useFetch();

  // loading + no error   or   no data + no error
  if ((loading || !data) && !error) {
    return <div>loading...</div>;
  }

  return (
    <div className={style.container}>
      {/* <div className={style.wrap}> */}
      <Greetings name="Soeun" />
      {/* all charts in chartContainer */}
      <div className={style.mainWrap}>
        <div className={style.chartContainer}>
          <div className={style.activityChartWrap}>
            {/* key on global format file */}
            <Activity data={data.activitySection} />
          </div>

          {/* three charts under activity chart */}
          <div className={style.bottomCharts}>
            <AverageSession data={data.averageSection} />
            <Performance data={data.performanceSection} />
            <Score />
          </div>
        </div>
        <div className={style.cardWrap}>
          <NutritionCard value="calories" nutrition="Calories">
            <FireIcon width={45} />
          </NutritionCard>
          <NutritionCard value="protein" nutrition="Proteins">
            <ChickenIcon width={45} />
          </NutritionCard>
          <NutritionCard value="glucide" nutrition="Glucides">
            <AppleIcon width={45} />
          </NutritionCard>
          <NutritionCard value="lipid" nutrition="Lipides">
            <BurgerIcon width={45} />
          </NutritionCard>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
