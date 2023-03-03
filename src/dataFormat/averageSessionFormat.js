const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const averageSessionFormat = (sessions) => {
  return sessions.map(({ day, sessionLength }) => ({
    // value of 'day' passed as index
    day: days[day - 1],
    sessionLength: sessionLength,
  }));
};

export default averageSessionFormat;
