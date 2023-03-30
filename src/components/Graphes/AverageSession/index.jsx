import style from './AverageSession.module.css';
import PropTypes from 'prop-types';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/**
 * A custom tooltip component that displays data based on active state and payload values
 *
 * @param {Object} props - The props object containing active and payload values
 * @param {boolean} props.active - Indicates if tooltip is active or not
 * @param {Array<Object>} props.payload - Array of objects containing data to be displayed in tooltip
 * @returns {JSX.Element|null} - A React component that displays tooltip or null if tooltip is inactive
 */

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

/**
 * A chart component that displays Average Session chart based on data
 *
 * @param {Object} props - The props object containing data
 * @param {Array<Object>} props.data -  An array of data that display average session chart with
 * @returns {React.ReactElement} Average session chart
 */

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

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

AverageSession.propTypes = {
  data: PropTypes.array.isRequired,
};
