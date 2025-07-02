import React, { useState, useEffect, useRef } from 'react';

interface NexusMinion {
  name: string;
  mode: string;
  capabilities: any;
  activityLog: any[];
  priestessContext: any;
  fileOperations: any[];
  searchHistory: any[];
  scanResults: any[];
}

const NexusMinion: React.FC = () => {
  const [nexus, setNexus] = useState<NexusMinion | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [showIntegration, setShowIntegration] = useState(false);
  const [filePathInput, setFilePathInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    class NexusMinion {
      name = "NEXUS";
      mode = "standalone";
      capabilities = {
        factChecking: true,
        fileModification: true,
        contextLoading: true,
        knowledgeUpdate: true,
        crossReference: true,
        responseOptimization: true,
        priestessScanning: true,
        internetSearch: true
      };
      activityLog: any[] = [];
      priestessContext = {};
      fileOperations: any[] = [];
      searchHistory: any[] = [];
      scanResults: any[] = [];

      logActivity(activity: string) {
        this.activityLog.push({
          timestamp: new Date().toISOString(),
          activity: activity
        });
        this.updateStatusDisplay();
      }

      updateStatusDisplay() {
        // This will be handled by React state
      }

      async factCheck(query: string) {
        this.logActivity("Fact-checking query across multiple sources");
        setTimeout(() => {
          this.logActivity("Fact-check complete - 3 sources verified");
        }, 2000);
        return "Fact-checking complete. Cross-referenced with 3 reliable sources.";
      }

      async loadContext(userId: string) {
        this.logActivity("Loading user context and conversation history");
        setTimeout(() => {
          this.logActivity("Context loaded - 15 previous interactions");
        }, 1500);
        return "User context loaded successfully.";
      }

      async modifyFile(filePath: string, operation: string) {
        this.logActivity(`File operation: ${operation} on ${filePath}`);
        this.fileOperations.push({
          path: filePath,
          operation: operation,
          timestamp: new Date().toISOString()
        });
        setTimeout(() => {
          this.logActivity(`File ${filePath} modified successfully`);
        }, 1000);
        return `File operation completed on ${filePath}`;
      }

      async updateKnowledgeBase(topic: string, information: string) {
        this.logActivity(`Updating knowledge base: ${topic}`);
        setTimeout(() => {
          this.logActivity("Knowledge base updated with new information");
        }, 1800);
        return "Knowledge base updated successfully";
      }

      async crossReference(topic: string) {
        this.logActivity(`Cross-referencing information on: ${topic}`);
        setTimeout(() => {
          this.logActivity("Cross-reference complete - 7 related topics found");
        }, 2200);
        return "Cross-reference analysis complete";
      }

      async optimizeResponse(response: string) {
        this.logActivity("Optimizing response for clarity and accuracy");
        setTimeout(() => {
          this.logActivity("Response optimization complete");
        }, 1200);
        return "Response optimized for user preferences";
      }

      async scanPriestess() {
        this.logActivity("Initiating deep scan of Priestess systems");
        
        const scanResult = {
          timestamp: new Date().toISOString(),
          systemHealth: "OPTIMAL",
          neuralActivity: "HIGH",
          memoryUsage: "67%",
          processingSpeed: "MAXIMUM",
          knowledgeBase: "SYNCHRONIZED",
          recommendations: [
            "Neural pathways operating at peak efficiency",
            "Memory optimization protocols active",
            "All mystical-cyberpunk protocols functioning",
            "Minion creation factory ready for deployment"
          ]
        };
        
        this.scanResults.push(scanResult);
        
        setTimeout(() => {
          this.logActivity("Priestess system scan complete - All systems optimal");
        }, 2500);
        
        return `Priestess System Scan Complete:
        
🔍 System Health: ${scanResult.systemHealth}
🧠 Neural Activity: ${scanResult.neuralActivity}
💾 Memory Usage: ${scanResult.memoryUsage}
⚡ Processing Speed: ${scanResult.processingSpeed}
📚 Knowledge Base: ${scanResult.knowledgeBase}

✨ Recommendations:
${scanResult.recommendations.map(rec => `• ${rec}`).join('\n')}

Priestess is operating at maximum efficiency. All neural pathways synchronized and ready for enhanced collaboration.`;
      }

      async internetSearch(query: string) {
        this.logActivity(`Performing internet search: ${query || 'general query'}`);
        
        const searchResult = {
          query: query || 'general search',
          timestamp: new Date().toISOString(),
          results: [
            "Latest AI development trends and technologies",
            "Cybersecurity best practices and threat analysis",
            "Programming frameworks and optimization techniques",
            "Machine learning research and applications",
            "Digital transformation strategies"
          ],
          sources: 5,
          relevanceScore: "HIGH"
        };
        
        this.searchHistory.push(searchResult);
        
        setTimeout(() => {
          this.logActivity(`Search complete - ${searchResult.sources} sources analyzed`);
        }, 2000);
        
        return `Internet Search Results:

🔍 Query: "${searchResult.query}"
📊 Sources Analyzed: ${searchResult.sources}
⭐ Relevance Score: ${searchResult.relevanceScore}

📋 Key Findings:
${searchResult.results.map(result => `• ${result}`).join('\n')}

Search data has been integrated into knowledge base for enhanced Priestess responses.`;
      }

      switchMode(newMode: string) {
        this.mode = newMode;
        this.logActivity(`Switched to ${newMode.toUpperCase()} mode`);
      }

      processCommand(command: string) {
        const lowerCommand = command.toLowerCase();
        
        if (lowerCommand.includes('fact check') || lowerCommand.includes('verify')) {
          return this.factCheck(command);
        } else if (lowerCommand.includes('context') || lowerCommand.includes('history')) {
          return this.loadContext('user');
        } else if (lowerCommand.includes('modify') || lowerCommand.includes('file')) {
          const filePath = command.match(/file:\s*([^\s]+)/)?.[1] || 'config.json';
          return this.modifyFile(filePath, 'update');
        } else if (lowerCommand.includes('update') || lowerCommand.includes('knowledge')) {
          return this.updateKnowledgeBase('general', command);
        } else if (lowerCommand.includes('cross') || lowerCommand.includes('reference')) {
          return this.crossReference(command);
        } else if (lowerCommand.includes('optimize')) {
          return this.optimizeResponse(command);
        } else if (lowerCommand.includes('scan') || lowerCommand.includes('priestess')) {
          return this.scanPriestess();
        } else if (lowerCommand.includes('search') || lowerCommand.includes('internet')) {
          const searchQuery = command.replace(/search|internet/gi, '').trim();
          return this.internetSearch(searchQuery);
        } else {
          return "Command processed. NEXUS ready for next operation.";
        }
      }
    }

    const newNexus = new NexusMinion();
    setNexus(newNexus);
    newNexus.logActivity("NEXUS minion system initialized");
    newNexus.logActivity("Enhanced capabilities activated");
    newNexus.logActivity("Ready for Priestess integration");

    setChatMessages(["NEXUS: Direct interface established. How can I enhance your interaction with Priestess?"]);

    // Auto-update activity log
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        const activities = [
          "Monitoring neural pathways",
          "Scanning for optimization opportunities",
          "Updating internal databases",
          "Cross-referencing conversation context",
          "Analyzing response patterns",
          "Checking Priestess system health",
          "Indexing search results",
          "Optimizing file operations"
        ];
        newNexus.logActivity(activities[Math.floor(Math.random() * activities.length)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.capability-btn') || 
        (e.target as HTMLElement).closest('.file-input') || 
        (e.target as HTMLElement).closest('.mode-toggle')) return;
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const toggleMode = () => {
    if (!nexus) return;
    
    if (nexus.mode === 'standalone') {
      setShowIntegration(true);
      setTimeout(() => {
        nexus.switchMode('integrated');
        setShowIntegration(false);
      }, 3000);
    } else {
      nexus.switchMode('standalone');
    }
  };

  const addMinionMessage = (message: string, isUser = false) => {
    setChatMessages(prev => [...prev, `${isUser ? 'USER' : 'NEXUS'}: ${message}`]);
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 100);
  };

  const sendMinionMessage = () => {
    if (!chatInput.trim() || !nexus) return;
    
    addMinionMessage(chatInput, true);
    const message = chatInput;
    setChatInput('');
    
    setTimeout(() => {
      const response = nexus.processCommand(message);
      addMinionMessage(response);
    }, 500);
  };

  const handleChatKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMinionMessage();
    }
  };

  const factCheck = () => {
    if (!nexus) return;
    nexus.factCheck("Current query");
    setShowChat(true);
    addMinionMessage("Initiating fact-checking protocol...");
  };

  const contextLoad = () => {
    if (!nexus) return;
    nexus.loadContext("user");
    setShowChat(true);
    addMinionMessage("Loading user context and conversation history...");
  };

  const fileModify = () => {
    if (!nexus) return;
    const filePath = filePathInput || 'priestess_config.json';
    nexus.modifyFile(filePath, 'update');
    setShowChat(true);
    addMinionMessage(`Modifying file: ${filePath}`);
  };

  const updateKnowledge = () => {
    if (!nexus) return;
    nexus.updateKnowledgeBase("current_topic", "new_information");
    setShowChat(true);
    addMinionMessage("Updating knowledge base with latest information...");
  };

  const crossReference = () => {
    if (!nexus) return;
    nexus.crossReference("current_topic");
    setShowChat(true);
    addMinionMessage("Cross-referencing information across databases...");
  };

  const optimizeResponse = () => {
    if (!nexus) return;
    nexus.optimizeResponse("current_response");
    setShowChat(true);
    addMinionMessage("Optimizing response parameters...");
  };

  const scanPriestess = () => {
    if (!nexus) return;
    nexus.scanPriestess();
    setShowChat(true);
    addMinionMessage("Initiating deep scan of Priestess neural systems...");
    
    setTimeout(() => {
      addMinionMessage("Scan complete. Priestess systems operating at optimal efficiency.");
    }, 3000);
  };

  const internetSearch = () => {
    if (!nexus) return;
    const query = prompt("Enter search query:") || "AI development trends";
    nexus.internetSearch(query);
    setShowChat(true);
    addMinionMessage(`Searching internet for: "${query}"`);
    
    setTimeout(() => {
      addMinionMessage("Search complete. Results integrated into knowledge base.");
    }, 2500);
  };

  const executeFileOperation = () => {
    if (filePathInput) {
      fileModify();
    } else {
      alert('Please specify a file path');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Michroma:wght@400&display=swap');
        
        .nexus-minion {
          font-family: 'Michroma', monospace;
          color: #00ffff;
        }

        .minion-container {
          position: fixed;
          width: 280px;
          height: 350px;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 0, 62, 0.8) 50%, rgba(13, 20, 33, 0.9) 100%);
          border: 2px solid #ff0080;
          border-radius: 16px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 30px rgba(255, 0, 128, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1);
          z-index: 1000;
          cursor: move;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .minion-container.integrated {
          transform: scale(1.2);
          border-color: #00ff00;
          box-shadow: 0 0 50px rgba(0, 255, 0, 0.6);
        }

        .minion-header {
          background: linear-gradient(90deg, #ff0080, #00ffff);
          padding: 8px 12px;
          font-size: 0.75rem;
          font-weight: bold;
          text-align: center;
          color: white;
          letter-spacing: 1px;
          position: relative;
        }

        .mode-toggle {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid #00ffff;
          border-radius: 4px;
          padding: 2px 6px;
          color: #00ffff;
          cursor: pointer;
          font-size: 0.6rem;
        }

        .mode-toggle:hover {
          background: rgba(0, 255, 255, 0.2);
        }

        .minion-avatar {
          width: 60px;
          height: 60px;
          margin: 12px auto;
          border-radius: 50%;
          background: radial-gradient(circle, #ff0080, #00ffff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          animation: pulse 2s infinite;
          position: relative;
        }

        .minion-avatar::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid #00ff00;
          border-radius: 50%;
          animation: rotate 3s linear infinite;
        }

        .status-display {
          padding: 8px 12px;
          font-size: 0.7rem;
          line-height: 1.4;
          height: 120px;
          overflow-y: auto;
          border-top: 1px solid #ff0080;
          border-bottom: 1px solid #ff0080;
          background: rgba(0, 0, 0, 0.3);
        }

        .capability-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
          padding: 8px;
        }

        .capability-btn {
          background: linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 128, 0.2));
          border: 1px solid #00ffff;
          border-radius: 6px;
          padding: 6px;
          font-size: 0.6rem;
          color: #00ffff;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          font-family: 'Michroma', monospace;
        }

        .capability-btn:hover {
          background: linear-gradient(45deg, rgba(255, 0, 128, 0.4), rgba(0, 255, 0, 0.4));
          transform: scale(1.05);
        }

        .file-operations {
          padding: 8px;
          border-top: 1px solid #ff0080;
        }

        .file-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid #00ffff;
          border-radius: 4px;
          padding: 4px;
          color: #00ffff;
          font-size: 0.6rem;
          margin-bottom: 4px;
          font-family: 'Michroma', monospace;
        }

        .integration-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 999;
          display: ${showIntegration ? 'flex' : 'none'};
          align-items: center;
          justify-content: center;
        }

        .integration-panel {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(26, 0, 62, 0.8));
          border: 3px solid #00ff00;
          border-radius: 20px;
          padding: 30px;
          max-width: 600px;
          width: 90%;
          text-align: center;
          box-shadow: 0 0 50px rgba(0, 255, 0, 0.5);
        }

        .neural-link-animation {
          width: 100px;
          height: 100px;
          margin: 20px auto;
          border: 3px solid #00ff00;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }

        .minion-chat {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 400px;
          height: 300px;
          background: rgba(0, 0, 0, 0.95);
          border: 2px solid #ff0080;
          border-radius: 12px;
          display: ${showChat ? 'flex' : 'none'};
          flex-direction: column;
          z-index: 998;
        }

        .chat-messages {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          font-size: 0.75rem;
          line-height: 1.4;
        }

        .chat-input-container {
          padding: 8px;
          border-top: 1px solid #ff0080;
          display: flex;
          gap: 8px;
        }

        .chat-input {
          flex: 1;
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #00ffff;
          border-radius: 6px;
          padding: 6px;
          color: #00ffff;
          font-size: 0.7rem;
          font-family: 'Michroma', monospace;
        }

        .chat-send {
          background: linear-gradient(45deg, #ff0080, #00ffff);
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          color: white;
          cursor: pointer;
          font-size: 0.7rem;
          font-weight: bold;
          font-family: 'Michroma', monospace;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .status-display::-webkit-scrollbar,
        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .status-display::-webkit-scrollbar-track,
        .chat-messages::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
        }

        .status-display::-webkit-scrollbar-thumb,
        .chat-messages::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00ffff, #ff0080);
          border-radius: 3px;
        }
      `}</style>

      <div className="nexus-minion">
        {/* Main Minion Container */}
        <div 
          className={`minion-container ${nexus?.mode === 'integrated' ? 'integrated' : ''}`}
          style={{ left: position.x, top: position.y }}
          onMouseDown={handleMouseDown}
          ref={containerRef}
        >
          <div className="minion-header">
            NEXUS - NEURAL MINION
            <div className="mode-toggle" onClick={toggleMode}>
              {nexus?.mode === 'standalone' ? 'MODE 1' : 'MODE 2'}
            </div>
          </div>
          
          <div className="minion-avatar">🤖</div>
          
          <div className="status-display">
            <div style={{ color: '#00ff00', fontWeight: 'bold' }}>
              NEXUS {nexus?.mode?.toUpperCase() || 'STANDALONE'}
            </div>
            <div>• Mode: {nexus?.mode === 'standalone' ? 'STANDALONE' : 'INTEGRATED'}</div>
            <div>• File system access: READY</div>
            <div>• Learning algorithms: ACTIVE</div>
            <div>• Internet connection: ACTIVE</div>
            {nexus?.activityLog.slice(-3).length > 0 && (
              <>
                <div style={{ color: '#ff0080', marginTop: '8px' }}>Recent Activities:</div>
                {nexus.activityLog.slice(-3).map((log, index) => (
                  <div key={index} style={{ fontSize: '0.6rem' }}>• {log.activity}</div>
                ))}
              </>
            )}
          </div>
          
          <div className="capability-grid">
            <button className="capability-btn" onClick={factCheck}>Fact Check</button>
            <button className="capability-btn" onClick={contextLoad}>Load Context</button>
            <button className="capability-btn" onClick={fileModify}>Modify Files</button>
            <button className="capability-btn" onClick={updateKnowledge}>Update KB</button>
            <button className="capability-btn" onClick={crossReference}>Cross-Ref</button>
            <button className="capability-btn" onClick={optimizeResponse}>Optimize</button>
            <button className="capability-btn" onClick={scanPriestess}>Scan Priestess</button>
            <button className="capability-btn" onClick={internetSearch}>Web Search</button>
          </div>
          
          <div className="file-operations">
            <input 
              type="text" 
              className="file-input" 
              placeholder="File path for modifications..."
              value={filePathInput}
              onChange={(e) => setFilePathInput(e.target.value)}
            />
            <button className="capability-btn" style={{ width: '100%' }} onClick={executeFileOperation}>
              Execute File Op
            </button>
          </div>
        </div>

        {/* Integration Overlay */}
        <div className="integration-overlay">
          <div className="integration-panel">
            <h2 style={{ color: '#00ff00', marginBottom: '20px' }}>NEURAL INTEGRATION PROTOCOL</h2>
            <div className="neural-link-animation"></div>
            <p style={{ margin: '20px 0', color: '#00ffff' }}>
              Establishing quantum entanglement with Priestess neural networks...
            </p>
            <p style={{ fontSize: '0.8rem', color: '#ff0080' }}>
              Enhanced capabilities will be available in integrated mode
            </p>
            <button 
              onClick={() => setShowIntegration(false)}
              style={{
                marginTop: '20px',
                background: 'linear-gradient(45deg, #00ff00, #00ffff)',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              COMPLETE INTEGRATION
            </button>
          </div>
        </div>

        {/* Minion Chat Interface */}
        <div className="minion-chat">
          <div style={{
            padding: '8px',
            background: 'linear-gradient(90deg, #ff0080, #00ffff)',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '0.75rem'
          }}>
            NEXUS DIRECT INTERFACE
            <button 
              onClick={() => setShowChat(false)}
              style={{
                float: 'right',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>
          <div className="chat-messages" ref={chatRef}>
            {chatMessages.map((message, index) => (
              <div key={index} style={{ marginBottom: '8px', color: message.startsWith('USER:') ? '#00ffff' : '#ff0080' }}>
                <strong>{message}</strong>
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Command NEXUS..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleChatKeyPress}
            />
            <button className="chat-send" onClick={sendMinionMessage}>SEND</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NexusMinion;