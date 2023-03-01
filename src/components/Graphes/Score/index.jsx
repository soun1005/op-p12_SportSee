import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import style from './Score.module.css';

const data = [
  { id: '1', name: 'L1', value: 75 },
  { id: '2', name: 'L2', value: 25 },
];

export default function Score() {
  return (
    <div className={style.container}>
      <ResponsiveContainer>
        <PieChart width="100%" height="100%">
          <text x={25} y={25} textAnchor="middle" dominantBaseline="middle">
            25
          </text>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="80%"
            outerRadius="100%"
            fill="#82ca9d"
            startAngle={90}
            endAngle={-270}
            paddingAngle={0}
            cornerRadius={5}
          >
            <Cell key="test" fill="#CCC" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
