/**
 * A function that formats object data for performance chart
 * @param {Array<Object>} data - score data
 * @returns {number} formatted values of score data to display score chart
 */

const scoreFormat = (data) => {
  const score = data.score;
  const todayScore = data.todayScore;

  // map data and if score return score, if todayScore, return todayScore
  return score || todayScore;

  // if (score) {
  //   return score;
  // } else {
  //   // change this to 'score'
  //   return todayScore;
  // }
};

export default scoreFormat;
