import activityFormat from './activityFormat';
import averageSessionFormat from './averageSessionFormat';
import performanceFormat from './performanceFormat';
import scoreFormat from './scoreFormat';

const globalFormat = ({
  activitySessions,
  performances,
  user,
  averageSessions,
}) => {
  // first data for testing

  // activity chart

  const activitySection = activityFormat(activitySessions);
  // average chart
  const averageSection = averageSessionFormat(averageSessions);

  // performance chart
  const performanceSection = performanceFormat(performances);

  // score chart
  const scoreSection = scoreFormat(user);

  // name display
  const nameDisplay = user.userInfos.firstName;

  // nutrition card display
  const nutriCard = user.keyData;
  const calories = `${nutriCard.calorieCount}kCal`;
  const protein = `${nutriCard.proteinCount}g`;
  const carbo = `${nutriCard.carbohydrateCount}g`;
  const lipid = `${nutriCard.lipidCount}g`;

  // returned values are called in Main.jsx with 'useFetch'
  return {
    activitySection,
    averageSection,
    performanceSection,
    scoreSection,
    nameDisplay,
    calories,
    protein,
    carbo,
    lipid,
  };
};

export default globalFormat;
