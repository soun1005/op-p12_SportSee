import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import style from './ScoreChart.module.css';

const COLORS = ['red', 'transparent'];

export default function ScoreChart() {
  // temporary data
  const score = 0.29;
  const bgData = [{ name: 'Group A', value: 400 }];
  const scoreData = [
    { name: 'A1', value: score },
    { name: 'A2', value: 1 - score },
  ];

  return (
    <div className={style.container}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* empty ring */}
          <Pie
            data={bgData}
            dataKey="value"
            // cx={200}
            // cy={200}
            innerRadius={90}
            outerRadius={100}
            blendStroke={true}
            fill="#e0e0e0"
          />
          <Pie
            data={scoreData}
            dataKey="value"
            // cx={200}
            // cy={200}
            innerRadius={90}
            outerRadius={100}
            // fill="red"
            startAngle={90}
            endAngle={450}
            cornerRadius="50%"
            blendStroke={true}
          >
            {scoreData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
