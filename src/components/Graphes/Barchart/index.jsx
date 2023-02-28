/* eslint-disable react/prop-types */
import style from './Barchart.module.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    day: 1,
    weight: 80,
    calorie: 240,
  },
  {
    day: 2,
    weight: 78,
    calorie: 100,
  },
  {
    day: 3,
    weight: 79,
    calorie: 200,
  },
  {
    day: 4,
    weight: 80,
    calorie: 240,
  },
  {
    day: 5,
    weight: 82,
    calorie: 300,
  },
  {
    day: 6,
    weight: 80,
    calorie: 240,
  },
  {
    day: 7,
    weight: 81,
    calorie: 220,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

export default function Barchart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 5,
          bottom: 5,
        }}
        barGap={0}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          padding={{ right: 5 }}
          height={50}
        />
        <YAxis
          yAxisId="kg"
          dataKey="weight"
          domain={['dataMin - 1', 'dataMax + 1']}
          allowDecimals={false}
          orientation="right"
          tickMargin={20}
          axisLine={false}
          tickLine={false}
          tickCount={3}
        />
        <YAxis
          yAxisId="cal"
          dataKey="calorie"
          // set the bars height to be the maximum data of Calorie
          domain={[0, 'dataMax']}
          hide={true}
          tickCount={3}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" height={50} align="right" />

        <Bar
          yAxisId="kg"
          dataKey="weight"
          fill="#282D30"
          radius={[20, 20, 0, 0]}
          animationDuration={1000}
          maxBarSize={12}
          legendType="circle"
        />
        <Bar
          yAxisId="cal"
          dataKey="calorie"
          fill="#E60000"
          radius={[20, 20, 0, 0]}
          animationDuration={1000}
          maxBarSize={12}
          legendType="circle"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
