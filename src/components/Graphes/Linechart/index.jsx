import style from './Linechart.module.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    day: 1,
    sessionLength: 30,
  },
  {
    day: 2,
    sessionLength: 40,
  },
  {
    day: 3,
    sessionLength: 50,
  },
  {
    day: 4,
    sessionLength: 30,
  },
  {
    day: 5,
    sessionLength: 30,
  },
  {
    day: 6,
    sessionLength: 50,
  },
  {
    day: 7,
    sessionLength: 50,
  },
];

export default function App() {
  return (
    <div className={style.container}>
      <h3>
        Durée moyenne des <br />
        sessions
      </h3>
      <ResponsiveContainer width="30%" height={200}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day"></XAxis>
          <YAxis hide={true} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
