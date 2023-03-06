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

export default function Activity({ data }) {
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
            caloriess Brulées (kCal)
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} barGap={'5%'} margin={0} barSize={8}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ right: 5 }}
            height={50}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
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
            dataKey="calories"
            // set the bars height to be the maximum data of calories
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
            dataKey="kilogram"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
            animationDuration={1000}
            maxBarSize={6}
            legendType="circle"
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            radius={[20, 20, 0, 0]}
            animationDuration={1000}
            maxBarSize={6}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
