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

// const kindToData = (kind) => {
//   // kind = 1 to 6
//   // console.log(kind);
// };

const performanceFormat = (chartData) => {
  // const { kind, data } = chartData;
  // console.log('chartData', chartData);
  const categories = chartData.kind;
  const displayingData = chartData.data;

  console.log('categories:', categories);
  console.log('displayingData:', displayingData);

  // categories의 값을 displayData의 값으로 대체하기.
  // map을 displayData에 돌려서, kind값을 categories값으로 대체하기

  // return data.map(({ data, kind }) =>
  //   console.log('data:', data, 'kind:', kind)
  //   // subject: kindToData(kind),
  //   // value: value,
  // );
  return displayingData.map(({ value, kind }) => ({
    subject: categories[kind],
    value,
  }));
};

export default performanceFormat;
