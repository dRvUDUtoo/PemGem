import React, { useState } from 'react';
import PriestessWidget from './components/PriestessWidget';
import NexusMinion from './components/NexusMinion';

function App() {
  const [showPriestess, setShowPriestess] = useState(false);
  const [showNexus, setShowNexus] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-8 text-cyan-400">🔮 Dr Vudu's AI Laboratory 🔮</h1>
        <p className="text-xl text-gray-300 mb-8">Choose your AI companion:</p>
        
        <div className="flex gap-6 justify-center">
          <button
            onClick={() => setShowPriestess(true)}
            className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            ⚡ Launch Priestess ⚡
          </button>
          
          <button
            onClick={() => setShowNexus(true)}
            className="bg-gradient-to-r from-pink-500 to-green-500 hover:from-green-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
          >
            🤖 Launch NEXUS Minion 🤖
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-400">
          <p>Priestess: Full-screen mystical AI interface</p>
          <p>NEXUS: Floating AI minion assistant</p>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

      {/* Render components */}
      {showPriestess && <PriestessWidget />}
      {showNexus && <NexusMinion />}
    </div>
  );
}

export default App;