/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import style from './ScoreChart.module.css';

const COLORS = ['red', 'transparent'];

export default function ScoreChart({ data }) {
  const bgData = [{ value: 1 }];
  const scoreData = [{ value: data }, { value: 1 - data }];

  return (
    <div className={style.container}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* empty ring */}
          <Pie
            data={bgData}
            dataKey="value"
            innerRadius={90}
            outerRadius={100}
            blendStroke={true}
            isAnimationActive={false}
            fill="#e0e0e0"
          />
          <Pie
            data={scoreData}
            dataKey="value"
            innerRadius={90}
            outerRadius={100}
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
