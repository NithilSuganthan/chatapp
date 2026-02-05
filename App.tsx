import React, { useState } from 'react';
import { ChatInterface } from './Components/ChatInterface.tsx';
import { ValentineSurprise } from './components/ValentineSurprise';

const App: React.FC = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [isBlanking, setIsBlanking] = useState(false);

  const triggerTransition = () => {
    setIsBlanking(true);
    // Brief "blanking out" effect before the surprise
    setTimeout(() => {
      setShowSurprise(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-sans">
      {!showSurprise ? (
        <>
          <ChatInterface onTimeUp={triggerTransition} />
          {isBlanking && (
            <div className="fixed inset-0 bg-white z-[100] transition-opacity duration-1000 flex items-center justify-center">
               <div className="text-gray-300 text-sm animate-pulse">Redirecting to the heart...</div>
            </div>
          )}
        </>
      ) : (
        <ValentineSurprise />
      )}
    </div>
  );
};

export default App;
