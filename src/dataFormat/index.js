import activityFormat from './activityFormat';
import averageSessionFormat from './averageSessionFormat';
import performanceFormat from './performanceFormat';

const globalFormat = (data) => {
  // first data for testing
  const activitySection = activityFormat(data.USER_ACTIVITY[0].sessions);
  const averageSection = averageSessionFormat(
    data.USER_AVERAGE_SESSIONS[0].sessions
  );
  const performanceSection = performanceFormat(data.USER_PERFORMANCE[0].data);
  console.log(performanceSection);

  return { activitySection, averageSection, performanceSection };
};

export default globalFormat;
