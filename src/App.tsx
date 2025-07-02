import React, { useState } from 'react';
import PriestessWidget from './components/PriestessWidget';
import NexusMinion from './components/NexusMinion';
import ControlPanel from './components/ControlPanel';

function App() {
  const [showPriestess, setShowPriestess] = useState(false);
  const [showNexus, setShowNexus] = useState(false);

  return (
    <>
      {/* Global CSS Variables for Dynamic Sizing */}
      <style>{`
        :root {
          --priestess-width: 1024px;
          --priestess-height: 768px;
          --nexus-width: 280px;
          --nexus-height: 350px;
          --base-font-size: 14px;
          --container-padding: 20px;
          --priestess-x: 0px;
          --priestess-y: 0px;
          --nexus-x: 20px;
          --nexus-y: 20px;
        }

        /* Dynamic sizing for Priestess */
        .priestess-widget {
          width: var(--priestess-width) !important;
          height: var(--priestess-height) !important;
          left: var(--priestess-x) !important;
          top: var(--priestess-y) !important;
        }

        .priestess-widget .main-container {
          max-width: 100% !important;
          padding: var(--container-padding) !important;
        }

        .priestess-widget .priestess-interface {
          padding: var(--container-padding) !important;
        }

        .priestess-widget .chat-terminal {
          height: calc(var(--priestess-height) * 0.4) !important;
          min-height: 200px !important;
        }

        .priestess-widget .functions-container {
          max-height: calc(var(--priestess-height) * 0.25) !important;
          min-height: 150px !important;
        }

        .priestess-widget .functions-grid {
          grid-template-columns: repeat(auto-fit, minmax(calc(var(--priestess-width) / 6), 1fr)) !important;
        }

        .priestess-widget .title {
          font-size: calc(var(--base-font-size) * 1.8) !important;
        }

        .priestess-widget .message {
          font-size: calc(var(--base-font-size) * 0.9) !important;
        }

        .priestess-widget .function-button {
          font-size: calc(var(--base-font-size) * 0.8) !important;
          padding: calc(var(--container-padding) * 0.8) !important;
        }

        .priestess-widget .input-field {
          font-size: calc(var(--base-font-size) * 1.1) !important;
          padding: calc(var(--container-padding) * 0.8) !important;
        }

        .priestess-widget .transmit-button {
          font-size: calc(var(--base-font-size) * 1.1) !important;
          padding: calc(var(--container-padding) * 0.8) calc(var(--container-padding) * 1.2) !important;
        }

        /* Dynamic sizing for NEXUS */
        .nexus-minion .minion-container {
          width: var(--nexus-width) !important;
          height: var(--nexus-height) !important;
          left: var(--nexus-x) !important;
          top: var(--nexus-y) !important;
        }

        .nexus-minion .status-display {
          height: calc(var(--nexus-height) * 0.3) !important;
          font-size: calc(var(--base-font-size) * 0.7) !important;
        }

        .nexus-minion .capability-btn {
          font-size: calc(var(--base-font-size) * 0.6) !important;
          padding: calc(var(--container-padding) * 0.3) !important;
        }

        .nexus-minion .file-input {
          font-size: calc(var(--base-font-size) * 0.6) !important;
          padding: calc(var(--container-padding) * 0.2) !important;
        }

        .nexus-minion .minion-header {
          font-size: calc(var(--base-font-size) * 0.75) !important;
          padding: calc(var(--container-padding) * 0.4) calc(var(--container-padding) * 0.6) !important;
        }

        .nexus-minion .mode-toggle {
          font-size: calc(var(--base-font-size) * 0.6) !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          :root {
            --priestess-width: calc(100vw - 20px);
            --priestess-height: calc(100vh - 20px);
            --nexus-width: 250px;
            --nexus-height: 300px;
            --base-font-size: 12px;
            --container-padding: 15px;
          }

          .priestess-widget .functions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .priestess-widget .input-container {
            flex-direction: column !important;
            gap: 10px !important;
          }
        }

        /* Ensure all elements scale properly */
        .priestess-widget * {
          box-sizing: border-box !important;
        }

        .nexus-minion * {
          box-sizing: border-box !important;
        }

        /* Auto-fit content */
        .priestess-widget .message,
        .priestess-widget .function-button,
        .nexus-minion .capability-btn {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }

        /* Scrollbar improvements */
        .priestess-widget .chat-terminal::-webkit-scrollbar,
        .priestess-widget .functions-container::-webkit-scrollbar,
        .nexus-minion .status-display::-webkit-scrollbar {
          width: calc(var(--base-font-size) * 0.8) !important;
        }

        /* Ensure visibility of all elements */
        .priestess-widget .status-container,
        .priestess-widget .neural-display,
        .priestess-widget .header,
        .nexus-minion .minion-header,
        .nexus-minion .minion-avatar,
        .nexus-minion .capability-grid {
          flex-shrink: 0 !important;
        }

        /* Dynamic spacing */
        .priestess-widget .header {
          margin-bottom: calc(var(--container-padding) * 1.6) !important;
        }

        .priestess-widget .neural-display {
          margin-bottom: calc(var(--container-padding) * 1.2) !important;
        }

        .priestess-widget .status-container {
          margin-bottom: calc(var(--container-padding) * 1.2) !important;
        }

        .priestess-widget .functions-container {
          margin-bottom: calc(var(--container-padding) * 1.2) !important;
        }

        .priestess-widget .chat-terminal {
          margin-bottom: calc(var(--container-padding)) !important;
        }
      `}</style>

      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative">
        {/* Control Panel - Always visible */}
        <ControlPanel />

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
            <p className="mt-4 text-cyan-400">🎛️ Use the Control Panel (top-left) to resize and position the AIs!</p>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        {/* Render components */}
        {showPriestess && <PriestessWidget />}
        {showNexus && <NexusMinion />}
      </div>
    </>
  );
}

export default App;