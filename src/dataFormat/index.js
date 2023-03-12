import activityFormat from './activityFormat';
import averageSessionFormat from './averageSessionFormat';
import performanceFormat from './performanceFormat';
import scoreFormat from './scoreFormat';

const globalFormat = (data) => {
  // first data for testing

  // activity chart
  const activitySection = activityFormat(data.USER_ACTIVITY[0].sessions);

  // average chart
  const averageSection = averageSessionFormat(
    data.USER_AVERAGE_SESSIONS[0].sessions
  );

  // performance chart
  const performanceSection = performanceFormat(data.USER_PERFORMANCE[0]);
  // console.log('performanceSection', performanceSection);

  // score chart
  const scoreSection = scoreFormat(data.USER_MAIN_DATA[0]);
  // console.log('scoreSection:', scoreSection);

  // returned values are called in Main.jsx with 'useFetch'
  return { activitySection, averageSection, performanceSection, scoreSection };
};

export default globalFormat;
