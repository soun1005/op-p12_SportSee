import activityFormat from './activityFormat';
import averageSessionFormat from './averageSessionFormat';
import performanceFormat from './performanceFormat';

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
  console.log('performanceSection', performanceSection);

  // returned values are called in Main.jsx with 'useFetch'
  return { activitySection, averageSection, performanceSection };
};

export default globalFormat;
