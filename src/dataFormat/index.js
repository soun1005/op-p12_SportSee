import activityFormat from './activityFormat';

const globalFormat = (data) => {
  // first data for testing
  const activitySection = activityFormat(data.USER_ACTIVITY[0].sessions);
  console.log('activitySection:', typeof activitySection, activitySection);
  return { activitySection };
};

export default globalFormat;
