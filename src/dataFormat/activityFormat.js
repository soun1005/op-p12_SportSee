const stringToNum = (date) => {
  // getDate()
  const lastNumber = date.charAt(date.length - 1);
  const toNum = parseInt(lastNumber);
  return toNum;
};

// data.sessions
const activityFormat = (sessions) => {
  // sessions.day, sessions.kilo, sessions.calories
  return sessions.map(({ day, kilogram, calories }) => ({
    // day, kilogram, calories : 차트 만드는데 필요한 키밸류
    // day의 값을 새로운 값으로 재지정
    day: stringToNum(day),
    kilogram,
    calories,
    // kilogram: kilogram,
    // calories: calories,
  }));
};

export default activityFormat;
