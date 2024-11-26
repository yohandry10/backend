import React from 'react';

interface TaskStatusProps {
  title: string;
  count: number;
  bgColor: string;
}

export const TaskStatus: React.FC<TaskStatusProps> = ({ title, count, bgColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg`}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-sm">tareas</span>
      </div>
    </div>
  );
};
