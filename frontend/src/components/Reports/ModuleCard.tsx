import React from 'react';

interface ModuleCardProps {
  title: string;
  description: string;
  progress?: number;
  status?: string;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, progress, status }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {status && (
          <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">
            {status}
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-3">{description}</p>
      {progress !== undefined && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 rounded-full h-2" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};
