const scoreFormat = (data) => {
  const score = data.score;
  const todayScore = data.todayScore;

  // map data and if score return score, if todayScore, return todayScore
  // data.map((el) => console.log(el));
  // console.log(todayScore);

  return score || todayScore;

  // if (score) {
  //   return score;
  // } else {
  //   // change this to 'score'
  //   return todayScore;
  // }
};

export default scoreFormat;
