/**
 * A function that formats object data for performance chart
 * @param {Array<Object>} chartData - performance data
 * @returns {Array<Object>} formatted values of user performance data to display performance chart
 */

const performanceFormat = (chartData) => {
  const categories = chartData.kind;
  const displayingData = chartData.data;

  // categories의 값을 displayData의 값으로 대체하기.
  // map을 displayData에 돌려서, kind값을 categories값으로 대체하기

  return displayingData.map(({ value, kind }) => ({
    subject: categories[kind],
    value,
  }));
};

export default performanceFormat;
