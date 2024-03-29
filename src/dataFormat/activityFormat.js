/**
 * A function that transfers a date string into a number
 * @param {string} date - A string containing a date
 * @returns {number} A number formatted from the date string
 */

const dayToDate = (date) => {
  const d = new Date(date);
  let day = d.getDate();
  return day;
};

/**
 * A function that formats data to display activity chart
 * @param {Array<Object>} sessions - activity data to be formatted
 * @returns {Array<Object>} formatted data for activity chart
 */

const activityFormat = (sessions) => {
  // sessions.day, sessions.kilo, sessions.calories
  return sessions.map(({ day, kilogram, calories }) => ({
    // day, kilogram, calories : 차트 만드는데 필요한 키밸류
    // day의 값을 새로운 값으로 재지정
    day: dayToDate(day),
    kilogram,
    calories,
  }));
};

export default activityFormat;
