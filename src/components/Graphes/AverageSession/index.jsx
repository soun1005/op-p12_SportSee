/* eslint-disable react/prop-types */
import style from './AverageSession.module.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// const data = [
//   {
//     day: 1,
//     sessionLength: 30,
//   },
//   {
//     day: 2,
//     sessionLength: 40,
//   },
//   {
//     day: 3,
//     sessionLength: 50,
//   },
//   {
//     day: 4,
//     sessionLength: 30,
//   },
//   {
//     day: 5,
//     sessionLength: 30,
//   },
//   {
//     day: 6,
//     sessionLength: 50,
//   },
//   {
//     day: 7,
//     sessionLength: 50,
//   },
// ];

export default function AverageSession({ data }) {
  return (
    <div className={style.container}>
      <h3>
        Durée moyenne des <br />
        sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 60,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#fff"
          />
          <YAxis hide={true} />
          <Tooltip wrapperStyle={{ outline: 'none' }} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#fff"
            dot={false}
            activeDot={{ r: 4 }}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
