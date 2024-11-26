import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ModuleProgressProps {
  progress: number;
  title: string;
}

export const ModuleProgress: React.FC<ModuleProgressProps> = ({ progress, title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="w-32 h-32 mx-auto">
        <CircularProgressbar 
          value={progress} 
          text={`${progress}%`}
          styles={{
            path: { stroke: '#8B5CF6' },
            text: { fill: '#8B5CF6', fontSize: '16px' }
          }}
        />
      </div>
    </div>
  );
};
