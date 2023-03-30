const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

/**
 * A function that formats object data for session chart
 * @param {Array<Object>} sessions - session part of data that is passed to the function
 * @returns {Array<Object>} formatted values after mapping each objects of session
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
