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
import DataSource from '../../components/DataSource';

/**
 * A React component that renders the main section of the page
 * @returns {JSX.Element} - A JSX element displaying main components that requires dynamic values such as charts and nutrition cards
 */

export default function Main() {
  const { data, loading, error, dataSource } = useFetch();

  // loading + no error   or   no data + no error
  if ((loading || !data) && !error) {
    return <div>loading...</div>;
  }

  if (error && !loading) {
    return <div>{error}</div>;
  }

  return (
    <div className={style.container}>
      <DataSource source={dataSource} />
      {/* <div className={style.wrap}> */}
      <Greetings name={data.nameDisplay} />
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
            <Score data={data.scoreSection} />
          </div>
        </div>
        <div className={style.cardWrap}>
          <NutritionCard value={data.calories} nutrition="Calories">
            <FireIcon width={45} />
          </NutritionCard>
          <NutritionCard value={data.protein} nutrition="Proteins">
            <ChickenIcon width={45} />
          </NutritionCard>
          <NutritionCard value={data.carbo} nutrition="Glucides">
            <AppleIcon width={45} />
          </NutritionCard>
          <NutritionCard value={data.lipid} nutrition="Lipides">
            <BurgerIcon width={45} />
          </NutritionCard>
        </div>
      </div>
    </div>
  );
}
