import React, { useState, useEffect, useRef } from 'react';

export const ValentineSurprise: React.FC = () => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isNoInitialized, setIsNoInitialized] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Initial position for the "No" button
    setNoPosition({ x: window.innerWidth / 2 + 60, y: window.innerHeight / 2 + 50 });
    setIsNoInitialized(true);
  }, []);

  const moveButton = () => {
    const padding = 100;
    const maxX = window.innerWidth - padding;
    const maxY = window.innerHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    setNoPosition({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setShowCelebration(true);
  };

  if (showCelebration) {
    return (
      <div className="fixed inset-0 bg-pink-50 flex flex-col items-center justify-center z-50 overflow-hidden">
        <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-pink-200 max-w-md animate-bounce">
          <h1 className="text-5xl font-bold text-pink-600 mb-6">YAY! ❤️</h1>
          <p className="text-2xl text-pink-500">I knew you'd say yes! You're officially my Valentine!</p>
          <div className="mt-8 text-6xl">🥰 ✨ 💖</div>
        </div>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="heart-particle text-pink-400"
            style={{ 
              left: `${Math.random() * 100}vw`, 
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 30 + 10}px`
            }}
          >
            <i className="fas fa-heart"></i>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-pink-100 flex items-center justify-center z-40 transition-all duration-1000">
      <div className="text-center px-6 py-12 bg-white/60 rounded-3xl backdrop-blur-sm shadow-2xl border border-white max-w-lg mx-auto float">
        <div className="mb-6 text-7xl animate-pulse">💝</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-8 leading-tight">
          Will you be my <br/> <span className="text-red-500 underline decoration-pink-300">Valentine?</span>
        </h1>
        
        <div className="flex justify-center space-x-12 mt-12">
          <button 
            onClick={handleYes}
            className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ring-4 ring-pink-200"
          >
            YES!
          </button>
        </div>
      </div>

      {isNoInitialized && (
        <button
          ref={noButtonRef}
          onMouseEnter={moveButton}
          onClick={moveButton}
          className="fixed px-8 py-4 bg-gray-400 text-white font-bold text-xl rounded-full shadow-md z-50 whitespace-nowrap"
          style={{
            left: `${noPosition.x}px`,
            top: `${noPosition.y}px`,
            transition: 'all 0.15s ease-out',
            transform: 'translate(-50%, -50%)'
          }}
        >
          No...
        </button>
      )}

      {/* Background Hearts */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i} 
          className="absolute opacity-10 text-pink-300 pointer-events-none"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 100 + 20}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          <i className="fas fa-heart"></i>
        </div>
      ))}
    </div>
  );
};
