import { PieChart, Pie, Label, Cell, ResponsiveContainer } from 'recharts';
import style from './Score.module.css';

const data = [
  { name: 'Score', value: 10 },
  { name: 'EmptyScore', value: 4 },
];

export default function Score() {
  return (
    <div className={style.container}>
      <ResponsiveContainer>
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
          >
            {data.map((entry, index) => {
              if (index === 1) {
                return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
              }
              return <Cell key={`cell-${index}`} fill="#E60000" />;
            })}
            <Label
              value={data[0].value}
              position="center"
              fill="grey"
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
