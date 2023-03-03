// {
//     day: '2020-07-01',
//     kilogram: 80,
//     calories: 240,
//   },

// {
//     day: 1,
//     kilogram: 80,
//     calories: 240,
//   }

const stringToNum = (date) => {
  const lastNumber = date.charAt(date.length - 1);
  const toNum = parseInt(lastNumber);
  return toNum;
};

const activityFormat = (sessions) => {
  return sessions.map(({ day, kilogram, calories }) => ({
    day: stringToNum(day),
    kilogram: kilogram,
    calories: calories,
  }));
};

export default activityFormat;
