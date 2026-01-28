import React from 'react';

interface GameOverProps {
  winner: 'PLAYER' | 'OPPONENT' | null;
  onPlayAgain: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ winner, onPlayAgain }) => {
  if (!winner) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border-2 border-slate-700 p-6 sm:p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl shadow-emerald-500/20">
        <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${winner === 'PLAYER' ? 'text-emerald-500' : 'text-rose-500'}`}>
          {winner === 'PLAYER' ? 'WAGMI!' : 'REKT!'}
        </h2>
        <p className="text-slate-400 mb-6">
          {winner === 'PLAYER' 
            ? 'You crushed the competition. Diamond hands prevail.' 
            : 'Paper hands detected. Better luck next time.'}
        </p>
        <button 
          onClick={onPlayAgain}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold uppercase tracking-widest text-white transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
