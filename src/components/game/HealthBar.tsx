import React from 'react';

interface HealthBarProps {
  hp: number;
  isPlayer: boolean;
}

const HealthBar: React.FC<HealthBarProps> = ({ hp, isPlayer }) => {
  const colorClass = isPlayer ? 'bg-emerald-500' : 'bg-rose-500';
  const textColorClass = isPlayer ? 'text-emerald-500' : 'text-rose-500';

  return (
    <div className="flex items-center gap-4">
      {!isPlayer && (
        <div className={`text-sm sm:text-xl font-black font-mono ${textColorClass}`}>{hp}%</div>
      )}
      <div className="text-center">
        <div className="w-32 sm:w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={`h-full ${colorClass} transition-all duration-500`} 
            style={{ width: `${hp}%` }}
          />
        </div>
      </div>
      {isPlayer && (
        <div className={`text-sm sm:text-xl font-black font-mono ${textColorClass}`}>{hp}%</div>
      )}
    </div>
  );
};

export default HealthBar;
