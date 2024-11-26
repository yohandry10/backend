import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ActivityData {
  name: string;
  estudio: number;
  examenes: number;
}

interface ActivityChartProps {
  data: ActivityData[];
}

export const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="estudio" fill="#8B5CF6" />
          <Bar dataKey="examenes" fill="#EC4899" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
