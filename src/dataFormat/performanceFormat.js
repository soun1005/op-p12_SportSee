// {
//     userId: 12,
//     kind: {
//       1: 'cardio',
//       2: 'energy',
//       3: 'endurance',
//       4: 'strength',
//       5: 'speed',
//       6: 'intensity',
//     },
//     data: [
//       {
//         value: 80,
//         kind: 1,
//       },
//       {
//         value: 120,
//         kind: 2,
//       },
//     ],
//   },

// const data = [
//   {
//     subject: 'cardio',
//     A: 80,
//   },
//   {
//     subject: 'energy',
//     A: 120,
//   },
// ];

const performanceFormat = (data) => {
  return data.map(({ value, kind }) => ({
    subject: kind,
    value: value,
  }));
};

export default performanceFormat;
