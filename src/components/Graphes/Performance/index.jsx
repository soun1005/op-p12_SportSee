/* eslint-disable react/prop-types */
import style from './Performance.module.css';

import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

// const data = [
//   {
//     subject: 'cardio',
//     A: 80,
//   },
//   {
//     subject: 'energy',
//     A: 120,
//   },
//   {
//     subject: 'endurance',
//     A: 140,
//   },
//   {
//     subject: 'strength',
//     A: 50,
//   },
//   {
//     subject: 'speed',
//     A: 200,
//   },
//   {
//     subject: 'intensity',
//     A: 90,
//   },
// ];

export default function Performance({ data }) {
  return (
    <div className={style.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={data}
          outerRadius="60%"
          // margin={{ top: 0, right: 40, bottom: 0, left: 20 }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar
            name="Mike"
            dataKey="value"
            fill="var(--red)"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
