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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

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
            top: 100,
            right: 0,
            left: 0,
            bottom: 16,
          }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--white)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="var(--white)" stopOpacity={1} />
            </linearGradient>
          </defs>

          <YAxis hide={true} domain={['dataMin - 20', 'dataMax']} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#fff"
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            // stroke="#fff"
            dot={false}
            activeDot={{ r: 4 }}
            strokeWidth={3}
            stroke="url(#lineGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
