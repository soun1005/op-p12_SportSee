const scoreFormat = (data) => {
  const score = data.score;
  const todayScore = data.todayScore;

  // map data and if score return score, if todayScore, return todayScore
  // data.map((el) => console.log(el));
  // console.log(todayScore);

  if (score) {
    console.log('score', score);
    return score;
  } else {
    console.log('todayScore', todayScore);
    // change this to 'score'
    return todayScore;
  }
};

export default scoreFormat;
