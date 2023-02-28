/* eslint-disable react/prop-types */
import style from './Activity.module.css';
import BlackDot from '../../../assets/blackdot.png';
import RedDot from '../../../assets/reddot.png';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

export default function Activity() {
  return (
    <div className={style.container}>
      <div className={style.legend}>
        <h3>Activité quotidienne</h3>
        <div className={style.legendElements}>
          <div className={style.legend1}>
            <span>
              <img src={BlackDot} alt="point noir" />
            </span>
            Poids (kg)
          </div>
          <div className={style.legend2}>
            <span>
              <img src={RedDot} alt="point rouge" />
            </span>
            Calories Brulées (kCal)
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 5,
            left: 5,
            bottom: 0,
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
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
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
    </div>
  );
}
