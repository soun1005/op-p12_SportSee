const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

/**
 * A function that formats object data for average session chart
 * @param {Array<Object>} sessions - average session data to be formatted
 * @returns {Array<Object>} formatted data for average session chart
 */

const averageSessionFormat = (sessions) => {
  return sessions.map(({ day, sessionLength }) => ({
    // value of 'day' passed as index
    day: days[day - 1],
    sessionLength,
    // sessionLength: sessionLength,
  }));
};

export default averageSessionFormat;
