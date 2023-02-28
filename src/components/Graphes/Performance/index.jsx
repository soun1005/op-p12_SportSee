import style from './Performance.module.css';

import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    subject: 'cardio',
    A: 80,
  },
  {
    subject: 'energy',
    A: 120,
  },
  {
    subject: 'endurance',
    A: 140,
  },
  {
    subject: 'strength',
    A: 50,
  },
  {
    subject: 'speed',
    A: 200,
  },
  {
    subject: 'intensity',
    A: 90,
  },
];

export default function Performance() {
  return (
    <ResponsiveContainer width="30%" height={250} className={style.container}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
