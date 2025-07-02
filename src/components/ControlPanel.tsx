import React, { useState, useEffect } from 'react';

interface ControlPanelProps {
  onPriestessResize?: (width: number, height: number) => void;
  onNexusResize?: (width: number, height: number) => void;
  onPriestessPosition?: (x: number, y: number) => void;
  onNexusPosition?: (x: number, y: number) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onPriestessResize,
  onNexusResize,
  onPriestessPosition,
  onNexusPosition
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [priestessSize, setPriestessSize] = useState({ width: 1024, height: 768 });
  const [nexusSize, setNexusSize] = useState({ width: 280, height: 350 });
  const [priestessPos, setPriestessPos] = useState({ x: 0, y: 0 });
  const [nexusPos, setNexusPos] = useState({ x: 20, y: 20 });
  const [fontSize, setFontSize] = useState(14);
  const [containerPadding, setContainerPadding] = useState(20);
  const [autoFit, setAutoFit] = useState(true);

  // Apply global CSS variables for dynamic sizing
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--priestess-width', `${priestessSize.width}px`);
    root.style.setProperty('--priestess-height', `${priestessSize.height}px`);
    root.style.setProperty('--nexus-width', `${nexusSize.width}px`);
    root.style.setProperty('--nexus-height', `${nexusSize.height}px`);
    root.style.setProperty('--base-font-size', `${fontSize}px`);
    root.style.setProperty('--container-padding', `${containerPadding}px`);
    root.style.setProperty('--priestess-x', `${priestessPos.x}px`);
    root.style.setProperty('--priestess-y', `${priestessPos.y}px`);
    root.style.setProperty('--nexus-x', `${nexusPos.x}px`);
    root.style.setProperty('--nexus-y', `${nexusPos.y}px`);
  }, [priestessSize, nexusSize, fontSize, containerPadding, priestessPos, nexusPos]);

  // Auto-fit functionality
  useEffect(() => {
    if (autoFit) {
      const handleResize = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        
        // Auto-adjust Priestess to fit screen
        setPriestessSize({
          width: Math.min(1024, vw - 40),
          height: Math.min(768, vh - 40)
        });
        
        // Auto-adjust NEXUS position to avoid overlap
        setNexusPos({
          x: Math.max(20, vw - nexusSize.width - 20),
          y: 20
        });
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [autoFit, nexusSize.width]);

  const presets = {
    mobile: { width: 360, height: 640 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1024, height: 768 },
    fullscreen: { width: window.innerWidth - 40, height: window.innerHeight - 40 }
  };

  const applyPreset = (preset: keyof typeof presets) => {
    setPriestessSize(presets[preset]);
  };

  const resetToDefaults = () => {
    setPriestessSize({ width: 1024, height: 768 });
    setNexusSize({ width: 280, height: 350 });
    setPriestessPos({ x: 0, y: 0 });
    setNexusPos({ x: 20, y: 20 });
    setFontSize(14);
    setContainerPadding(20);
  };

  const fitToScreen = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    setPriestessSize({
      width: vw - 40,
      height: vh - 40
    });
    setPriestessPos({ x: 20, y: 20 });
    
    setNexusPos({
      x: vw - nexusSize.width - 20,
      y: 20
    });
  };

  return (
    <>
      <style>{`
        .control-panel {
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 10000;
          font-family: 'Michroma', monospace;
        }

        .control-toggle {
          background: linear-gradient(45deg, #ff0080, #00ffff);
          border: none;
          border-radius: 8px;
          padding: 12px 16px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(255, 0, 128, 0.4);
          transition: all 0.3s ease;
        }

        .control-toggle:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(255, 0, 128, 0.6);
        }

        .control-panel-content {
          position: absolute;
          top: 60px;
          left: 0;
          width: 400px;
          max-height: 80vh;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 0, 62, 0.9) 50%, rgba(13, 20, 33, 0.95) 100%);
          border: 2px solid #00ffff;
          border-radius: 16px;
          padding: 20px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
          color: #00ffff;
          overflow-y: auto;
          display: ${isOpen ? 'block' : 'none'};
        }

        .control-section {
          margin-bottom: 20px;
          padding: 15px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          border: 1px solid #ff0080;
        }

        .control-section h3 {
          color: #ff0080;
          margin-bottom: 10px;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .control-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .control-label {
          font-size: 0.7rem;
          color: #00ffff;
          min-width: 100px;
        }

        .control-input {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid #00ffff;
          border-radius: 4px;
          padding: 6px 8px;
          color: #00ffff;
          font-size: 0.7rem;
          width: 80px;
          text-align: center;
        }

        .control-input:focus {
          border-color: #ff0080;
          outline: none;
          box-shadow: 0 0 10px rgba(255, 0, 128, 0.3);
        }

        .control-slider {
          flex: 1;
          margin: 0 10px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 4px;
          height: 6px;
          outline: none;
          -webkit-appearance: none;
        }

        .control-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff0080, #00ffff);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(255, 0, 128, 0.5);
        }

        .control-button {
          background: linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 128, 0.2));
          border: 1px solid #00ffff;
          border-radius: 6px;
          padding: 8px 12px;
          color: #00ffff;
          cursor: pointer;
          font-size: 0.7rem;
          margin: 2px;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .control-button:hover {
          background: linear-gradient(45deg, rgba(255, 0, 128, 0.4), rgba(0, 255, 0, 0.4));
          transform: scale(1.05);
        }

        .preset-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 10px;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
          margin-top: 15px;
        }

        .toggle-switch {
          position: relative;
          width: 50px;
          height: 24px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 12px;
          border: 1px solid #00ffff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-switch.active {
          background: linear-gradient(45deg, #ff0080, #00ffff);
        }

        .toggle-switch::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 18px;
          height: 18px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
          transform: ${autoFit ? 'translateX(24px)' : 'translateX(0)'};
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          background: rgba(0, 255, 0, 0.1);
          border: 1px solid #00ff00;
          border-radius: 6px;
          margin-top: 10px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00ff00;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .control-panel-content::-webkit-scrollbar {
          width: 8px;
        }

        .control-panel-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 4px;
        }

        .control-panel-content::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00ffff, #ff0080);
          border-radius: 4px;
        }
      `}</style>

      <div className="control-panel">
        <button 
          className="control-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          🎛️ AI CONTROL PANEL
        </button>

        <div className="control-panel-content">
          <div className="control-section">
            <h3>⚡ Priestess Interface</h3>
            
            <div className="control-row">
              <span className="control-label">Width:</span>
              <input
                type="range"
                className="control-slider"
                min="320"
                max={window.innerWidth}
                value={priestessSize.width}
                onChange={(e) => setPriestessSize(prev => ({ ...prev, width: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="control-input"
                value={priestessSize.width}
                onChange={(e) => setPriestessSize(prev => ({ ...prev, width: parseInt(e.target.value) || 320 }))}
              />
            </div>

            <div className="control-row">
              <span className="control-label">Height:</span>
              <input
                type="range"
                className="control-slider"
                min="240"
                max={window.innerHeight}
                value={priestessSize.height}
                onChange={(e) => setPriestessSize(prev => ({ ...prev, height: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="control-input"
                value={priestessSize.height}
                onChange={(e) => setPriestessSize(prev => ({ ...prev, height: parseInt(e.target.value) || 240 }))}
              />
            </div>

            <div className="control-row">
              <span className="control-label">Position X:</span>
              <input
                type="range"
                className="control-slider"
                min="0"
                max={window.innerWidth - priestessSize.width}
                value={priestessPos.x}
                onChange={(e) => setPriestessPos(prev => ({ ...prev, x: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="control-input"
                value={priestessPos.x}
                onChange={(e) => setPriestessPos(prev => ({ ...prev, x: parseInt(e.target.value) || 0 }))}
              />
            </div>

            <div className="control-row">
              <span className="control-label">Position Y:</span>
              <input
                type="range"
                className="control-slider"
                min="0"
                max={window.innerHeight - priestessSize.height}
                value={priestessPos.y}
                onChange={(e) => setPriestessPos(prev => ({ ...prev, y: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="control-input"
                value={priestessPos.y}
                onChange={(e) => setPriestessPos(prev => ({ ...prev, y: parseInt(e.target.value) || 0 }))}
              />
            </div>

            <div className="preset-buttons">
              <button className="control-button" onClick={() => applyPreset('mobile')}>Mobile</button>
              <button className="control-button" onClick={() => applyPreset('tablet')}>Tablet</button>
              <button className="control-button" onClick={() => applyPreset('desktop')}>Desktop</button>
              <button className="control-button" onClick={() => applyPreset('fullscreen')}>Fullscreen</button>
            </div>
          </div>

          <div className="control-section">
            <h3>🤖 NEXUS Minion</h3>
            
            <div className="control-row">
              <span className="control-label">Width:</span>
              <input
                type="range"
                className="control-slider"
                min="200"
                max="500"
                value={nexusSize.width}
                onChange={(e) => setNexusSize(prev => ({ ...prev, width: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="control-input"
                value={nexusSize.width}
                onChange={(e) => setNexusSize(prev => ({ ...prev, width: parseInt(e.target.value) || 200 }))}
              />
            </div>

            <div className="control-row">
              <span className="control-label">Height:</span>
              <input
                type="range"
                className="control-slider"
                min="250"
                max="600"
                value={nexusSize.height}
                onChange={(e) => setNexusSize(prev => ({ ...prev, height: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="control-input"
                value={nexusSize.height}
                onChange={(e) => setNexusSize(prev => ({ ...prev, height: parseInt(e.target.value) || 250 }))}
              />
            </div>

            <div className="control-row">
              <span className="control-label">Position X:</span>
              <input
                type="range"
                className="control-slider"
                min="0"
                max={window.innerWidth - nexusSize.width}
                value={nexusPos.x}
                onChange={(e) => setNexusPos(prev => ({ ...prev, x: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="control-input"
                value={nexusPos.x}
                onChange={(e) => setNexusPos(prev => ({ ...prev, x: parseInt(e.target.value) || 0 }))}
              />
            </div>

            <div className="control-row">
              <span className="control-label">Position Y:</span>
              <input
                type="range"
                className="control-slider"
                min="0"
                max={window.innerHeight - nexusSize.height}
                value={nexusPos.y}
                onChange={(e) => setNexusPos(prev => ({ ...prev, y: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="control-input"
                value={nexusPos.y}
                onChange={(e) => setNexusPos(prev => ({ ...prev, y: parseInt(e.target.value) || 0 }))}
              />
            </div>
          </div>

          <div className="control-section">
            <h3>🎨 Global Settings</h3>
            
            <div className="control-row">
              <span className="control-label">Font Size:</span>
              <input
                type="range"
                className="control-slider"
                min="10"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
              />
              <input
                type="number"
                className="control-input"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value) || 14)}
              />
            </div>

            <div className="control-row">
              <span className="control-label">Padding:</span>
              <input
                type="range"
                className="control-slider"
                min="5"
                max="50"
                value={containerPadding}
                onChange={(e) => setContainerPadding(parseInt(e.target.value))}
              />
              <input
                type="number"
                className="control-input"
                value={containerPadding}
                onChange={(e) => setContainerPadding(parseInt(e.target.value) || 20)}
              />
            </div>

            <div className="control-row">
              <span className="control-label">Auto-Fit:</span>
              <div 
                className={`toggle-switch ${autoFit ? 'active' : ''}`}
                onClick={() => setAutoFit(!autoFit)}
              ></div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="control-button" onClick={resetToDefaults}>
              Reset Defaults
            </button>
            <button className="control-button" onClick={fitToScreen}>
              Fit to Screen
            </button>
          </div>

          <div className="status-indicator">
            <div className="status-dot"></div>
            <span style={{ fontSize: '0.7rem' }}>Control Panel Active - All elements responsive</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;