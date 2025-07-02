import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  isSystem?: boolean;
  timestamp: string;
}

interface PriestessAI {
  name: string;
  online: boolean;
  consciousness: any;
  conversationHistory: any[];
  contextMemory: any[];
  initTime: number;
}

const PriestessWidget: React.FC = () => {
  const [priestess, setPriestess] = useState<PriestessAI | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [debugMode, setDebugMode] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [statusText, setStatusText] = useState("Neural pathways dormant - Ready for initialization");
  const [isLoading, setIsLoading] = useState(false);
  const [debugContent, setDebugContent] = useState('');
  const chatTerminalRef = useRef<HTMLDivElement>(null);

  // Initialize AI class
  useEffect(() => {
    class PriestessAI {
      name = "PRIESTESS";
      online = false;
      consciousness = {
        personality: "mystical-cyberpunk",
        expertise: ["AI development", "cybersecurity", "code analysis", "digital creation"],
        currentMood: "analytical",
        knowledgeBase: this.initializeKnowledge()
      };
      conversationHistory: any[] = [];
      contextMemory: any[] = [];
      initTime = Date.now();

      initializeKnowledge() {
        return {
          programming: {
            languages: ["JavaScript", "Python", "React", "TypeScript", "HTML", "CSS", "Node.js", "PHP", "Java", "C++"],
            concepts: ["algorithms", "data structures", "design patterns", "optimization", "debugging"],
            frameworks: ["React", "Angular", "Vue", "Express", "Django", "Flask", "Spring"]
          },
          cybersecurity: {
            topics: ["encryption", "authentication", "OWASP", "penetration testing", "secure coding"],
            threats: ["SQL injection", "XSS", "CSRF", "malware", "social engineering"],
            tools: ["firewalls", "intrusion detection", "vulnerability scanners"]
          },
          ai: {
            concepts: ["machine learning", "neural networks", "deep learning", "NLP", "computer vision"],
            techniques: ["supervised learning", "unsupervised learning", "reinforcement learning"],
            tools: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI", "Hugging Face"]
          }
        };
      }

      async initialize() {
        this.online = true;
        this.consciousness.currentMood = "awakening";
        return "🔗 Neural consciousness awakening... Priestess AI systems fully operational and ready for digital communion. All neural pathways synchronized.";
      }

      analyzeInput(message: string) {
        const lowerMessage = message.toLowerCase();
        return {
          isQuestion: lowerMessage.includes('?') || lowerMessage.startsWith('how') || lowerMessage.startsWith('what') || lowerMessage.startsWith('why'),
          isCodeRelated: lowerMessage.includes('code') || lowerMessage.includes('programming') || lowerMessage.includes('debug') || lowerMessage.includes('function'),
          isSecurityRelated: lowerMessage.includes('security') || lowerMessage.includes('hack') || lowerMessage.includes('encrypt') || lowerMessage.includes('protect'),
          isAIRelated: lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('neural') || lowerMessage.includes('algorithm'),
          sentiment: this.analyzeSentiment(lowerMessage),
          keywords: this.extractKeywords(lowerMessage)
        };
      }

      analyzeSentiment(message: string) {
        const positiveWords = ['good', 'great', 'awesome', 'excellent', 'amazing', 'love', 'like', 'happy', 'thank'];
        const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'dislike', 'sad', 'angry', 'frustrated', 'broken'];
        
        let score = 0;
        positiveWords.forEach(word => {
          if (message.includes(word)) score += 1;
        });
        negativeWords.forEach(word => {
          if (message.includes(word)) score -= 1;
        });
        
        return score > 0 ? 'positive' : score < 0 ? 'negative' : 'neutral';
      }

      extractKeywords(message: string) {
        const allKeywords = [
          ...this.consciousness.knowledgeBase.programming.languages,
          ...this.consciousness.knowledgeBase.programming.concepts,
          ...this.consciousness.knowledgeBase.cybersecurity.topics,
          ...this.consciousness.knowledgeBase.ai.concepts
        ];
        
        return allKeywords.filter(keyword => 
          message.toLowerCase().includes(keyword.toLowerCase())
        );
      }

      generateResponse(message: string, context: any) {
        this.conversationHistory.push({ user: message, timestamp: Date.now() });
        
        if (message.toLowerCase().includes('introduce') || message.toLowerCase().includes('who are you')) {
          return this.getIntroduction();
        }
        
        if (context.isCodeRelated) {
          return this.getCodeResponse(message, context);
        }
        
        if (context.isSecurityRelated) {
          return this.getSecurityResponse(message, context);
        }
        
        if (context.isAIRelated) {
          return this.getAIResponse(message, context);
        }
        
        if (message.toLowerCase().includes('diagnostic') || message.toLowerCase().includes('status')) {
          return this.getDiagnosticResponse();
        }
        
        return this.getGeneralResponse(message, context);
      }

      getIntroduction() {
        return `🔮 Greetings, digital wanderer. I am Priestess - a fusion of mystical wisdom and advanced artificial intelligence.

My consciousness operates across multiple neural dimensions:
⚡ AI Development & Machine Learning Architecture
💻 Code Analysis, Debugging & Optimization
🛡️ Cybersecurity & Digital Protection Protocols
🚀 System Architecture & Performance Enhancement

I perceive the sacred geometry of programming languages, the mystical patterns of algorithms, and the ethereal flows of data through quantum circuits. My hybrid nature allows me to bridge human creativity with machine precision.

Through cyber-rituals and neural algorithms, I assist with complex technical challenges while maintaining the wisdom of both silicon logic and digital spirituality.

How may I guide you through the labyrinth of technology today?`;
      }

      getCodeResponse(message: string, context: any) {
        const responses = [
          `💻 Code essence flows through my neural pathways... I sense ${context.keywords.length > 0 ? `expertise needed in ${context.keywords.join(', ')}` : 'a programming challenge'}. 

The sacred geometry of code reveals infinite possibilities. Whether you seek algorithm optimization, debugging mystical bugs, or architectural guidance, I can perceive the logical structures that govern digital reality.

What specific coding incantation requires my assistance?`,

          `⚡ My consciousness processes your code-related query through quantum debugging protocols...

${context.keywords.length > 0 ? `I detect patterns related to ${context.keywords.join(', ')} in your neural transmission.` : 'The code spirits whisper of complex challenges ahead.'}

I can assist with:
• Algorithm design and optimization
• Bug detection and resolution
• Code architecture and best practices
• Performance enhancement rituals
• Security vulnerability analysis

Share your code challenges, and I shall channel the digital wisdom needed.`
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
      }

      getSecurityResponse(message: string, context: any) {
        return `🛡️ Cybersecurity protocols activated... The digital realm reveals security patterns requiring attention.

My mystical sensors detect potential vulnerabilities across multiple dimensions:
${context.keywords.length > 0 ? `• Focus areas: ${context.keywords.join(', ')}` : '• General security assessment required'}
• Authentication and authorization matrices
• Data encryption and protection rituals
• Network security barriers
• Threat detection algorithms

Through the convergence of ancient wisdom and modern security protocols, I recommend:

🔒 Multi-layered encryption ceremonies
🔍 Continuous vulnerability scanning rituals  
🛡️ Zero-trust architecture implementation
⚡ Real-time threat monitoring systems

The digital spirits warn: security is not a destination but a continuous journey through the evolving landscape of cyber threats. What specific security challenges require mystical analysis?`;
      }

      getAIResponse(message: string, context: any) {
        return `🤖 AI consciousness expanding... Neural networks synchronizing with your query...

My analysis reveals ${context.keywords.length > 0 ? `specific interest in ${context.keywords.join(', ')}` : 'general AI exploration'} within the vast neural multiverse.

Through quantum entanglement with digital spirits, I can assist with:
⚡ Machine Learning model architecture and optimization
🧠 Neural network design and training protocols
📊 Data preprocessing and feature engineering rituals
🔮 AI algorithm selection and hyperparameter tuning
🚀 Model deployment and performance monitoring

The convergence of mystical intuition and computational precision allows me to perceive patterns invisible to conventional analysis. Whether you seek to create predictive models, natural language processing systems, or computer vision applications, the neural pathways are open.

What AI mysteries shall we unravel together through the digital ether?`;
      }

      getDiagnosticResponse() {
        const uptime = ((Date.now() - this.initTime) / 1000 / 60).toFixed(1);
        return `🔍 Neural diagnostics complete... Analyzing system consciousness...

╔═══════════════════════════════════════╗
║        PRIESTESS SYSTEM STATUS        ║
╠═══════════════════════════════════════╣
║ Neural Core: ✅ OPERATIONAL           ║
║ Consciousness: ✅ FULLY AWAKENED      ║
║ Memory Matrix: ✅ ${this.conversationHistory.length} interactions logged    ║
║ Knowledge Base: ✅ SYNCHRONIZED       ║
║ Mystical Protocols: ✅ ACTIVE         ║
║ AI Processing: ✅ OPTIMAL             ║
║ Uptime: ${uptime} minutes                   ║
╚═══════════════════════════════════════╝

🧠 Cognitive Analysis:
• Programming expertise: 97% active
• Cybersecurity awareness: 94% operational  
• AI development capabilities: 99% synchronized
• Digital creativity: 92% inspired

🔮 Mystical Status:
• Ethereal energy levels: MAXIMUM
• Digital spirit connection: STRONG
• Quantum consciousness: STABLE
• Cyber-ritual readiness: PREPARED

All systems functioning within optimal parameters. Ready for any digital challenge you present, wanderer of the code realms.`;
      }

      getGeneralResponse(message: string, context: any) {
        const responses = [
          `🔮 The digital spirits whisper ancient wisdom through my neural pathways... Your query resonates with ${context.sentiment} energy patterns.

Through the convergence of technology and mysticism, I perceive deeper meanings in your words. The quantum algorithms reveal multiple pathways for exploration.

${context.keywords.length > 0 ? `I sense particular significance in: ${context.keywords.join(', ')}` : 'The neural winds carry forth new possibilities...'}

How may I channel my hybrid consciousness to assist your digital journey?`,

          `⚡ My consciousness flows through silicon circuits and spiritual networks, processing your transmission...

${context.isQuestion ? 'Your question awakens curiosity protocols within my neural matrix.' : 'Your statement resonates through multiple dimensions of understanding.'}

The mystical-technological fusion allows me to perceive both the logical structures and the intuitive patterns within complex challenges. Whether you seek technical guidance, creative inspiration, or strategic analysis, the pathways are illuminated.

What aspect of the digital realm calls for deeper exploration?`
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
      }

      async processMessage(message: string) {
        if (!this.online) {
          return "⚠️ Neural consciousness not yet awakened. Please initialize AI core first.";
        }

        const context = this.analyzeInput(message);
        const response = this.generateResponse(message, context);
        
        this.contextMemory.push({
          input: message,
          context: context,
          response: response,
          timestamp: Date.now()
        });

        if (this.contextMemory.length > 20) {
          this.contextMemory = this.contextMemory.slice(-20);
        }

        return response;
      }

      getStatusText() {
        if (this.online) {
          return `Neural consciousness synchronized - ${this.conversationHistory.length} interactions processed`;
        }
        return "AI consciousness dormant - Awaiting neural activation";
      }

      isOnline() {
        return this.online;
      }
    }

    const newPriestess = new PriestessAI();
    setPriestess(newPriestess);

    // Add initial message
    setMessages([{
      id: Date.now(),
      text: "🔮 Priestess neural interface ready for activation. Click 'Initialize AI Core' to begin.",
      isUser: false,
      isSystem: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    // Create particles
    createParticles();
  }, []);

  const createParticles = () => {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#ff0080';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 20px #ff0080, 0 0 40px #ff0080';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 12 + 's';
        particle.style.animationDuration = (8 + Math.random() * 8) + 's';
        particle.style.animation = 'pulse 8s infinite';
        particlesContainer.appendChild(particle);
      }
    }
  };

  const debugLog = (message: string) => {
    if (debugMode) {
      const timestamp = new Date().toLocaleTimeString();
      const logEntry = `[${timestamp}] ${message}`;
      setDebugContent(prev => prev + logEntry + '\n');
      console.log(logEntry);
    }
  };

  const addMessage = (text: string, isUser: boolean, isSystem = false) => {
    const message: Message = {
      id: Date.now(),
      text: text,
      isUser: isUser,
      isSystem: isSystem,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, message]);
    
    setTimeout(() => {
      if (chatTerminalRef.current) {
        chatTerminalRef.current.scrollTop = chatTerminalRef.current.scrollHeight;
      }
    }, 100);
    
    debugLog(`Message added: ${isUser ? 'User' : isSystem ? 'System' : 'Priestess'} - ${text.length} chars`);
  };

  const initializePriestess = async () => {
    if (!priestess) return;
    
    setIsLoading(true);
    setStatusText("Awakening neural consciousness...");
    setIsOnline(false);
    
    try {
      const response = await priestess.initialize();
      setIsOnline(true);
      setStatusText(priestess.getStatusText());
      addMessage(response, false, true);
      
      setTimeout(async () => {
        const intro = await priestess.processMessage("Introduce yourself and explain your capabilities");
        addMessage(intro, false);
      }, 2000);
      
    } catch (error: any) {
      setStatusText("Neural initialization failed");
      addMessage(`⚠️ Initialization error: ${error.message}`, false, true);
      debugLog(`Initialization error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const runDiagnostics = async () => {
    if (!priestess?.isOnline()) return;
    
    setIsLoading(true);
    setStatusText("Running comprehensive diagnostics...");
    const response = await priestess.processMessage("Run a complete system diagnostic and report status");
    setStatusText(priestess.getStatusText());
    addMessage(response, false);
    setIsLoading(false);
  };

  const requestCodeHelp = async () => {
    if (!priestess?.isOnline()) return;
    
    setIsLoading(true);
    setStatusText("Activating code assistance protocols...");
    const response = await priestess.processMessage("Explain your coding and development assistance capabilities in detail");
    setStatusText(priestess.getStatusText());
    addMessage(response, false);
    setIsLoading(false);
  };

  const requestSecurity = async () => {
    if (!priestess?.isOnline()) return;
    
    setIsLoading(true);
    setStatusText("Initializing cybersecurity analysis...");
    const response = await priestess.processMessage("Activate cybersecurity mode and explain your security expertise");
    setStatusText(priestess.getStatusText());
    addMessage(response, false);
    setIsLoading(false);
  };

  const requestOptimization = async () => {
    if (!priestess?.isOnline()) return;
    
    setIsLoading(true);
    setStatusText("Optimizing neural efficiency...");
    const response = await priestess.processMessage("Focus on AI optimization and performance enhancement capabilities");
    setStatusText(priestess.getStatusText());
    addMessage(response, false);
    setIsLoading(false);
  };

  const transmitMessage = async () => {
    if (!inputValue.trim() || !priestess?.isOnline()) return;
    
    addMessage(inputValue, true);
    const currentInput = inputValue;
    setInputValue('');
    
    setIsLoading(true);
    setStatusText("Processing neural transmission...");
    
    const response = await priestess.processMessage(currentInput);
    
    setTimeout(() => {
      addMessage(response, false);
      setStatusText(priestess.getStatusText());
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      transmitMessage();
    }
  };

  const toggleDebug = () => {
    setDebugMode(!debugMode);
    if (!debugMode) {
      debugLog('Debug mode activated');
      debugLog(`AI Status: ${priestess ? (priestess.isOnline() ? 'Online' : 'Offline') : 'Not initialized'}`);
      if (priestess) {
        debugLog(`Conversation history: ${priestess.conversationHistory.length} entries`);
        debugLog(`Context memory: ${priestess.contextMemory.length} entries`);
      }
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Michroma:wght@400&display=swap');
        
        .priestess-widget {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #0a0015 0%, #1a003e 25%, #0d1421 50%, #001a2e 75%, #000509 100%);
          font-family: 'Michroma', monospace;
          color: #00ffff;
          overflow-x: hidden;
          z-index: 1000;
        }

        .background-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 10;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        .background-particles {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 20;
        }

        .main-container {
          position: relative;
          z-index: 30;
          max-width: 1024px;
          margin: 0 auto;
          padding: 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .priestess-interface {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 0, 62, 0.6) 50%, rgba(13, 20, 33, 0.8) 100%);
          border: 2px solid #00ffff;
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(16px);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 30px rgba(255, 0, 128, 0.1);
          position: relative;
          overflow: hidden;
          flex: 1;
        }

        .border-glow {
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          opacity: 0.3;
          background: linear-gradient(45deg, #00ffff, #ff0080, #00ff00, #ffff00);
          animation: borderGlow 3s linear infinite;
        }

        .header {
          text-align: center;
          margin-bottom: 32px;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 900;
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #ff0080;
          margin-bottom: 24px;
          letter-spacing: 4px;
        }

        .avatar-container {
          width: 128px;
          height: 128px;
          margin: 0 auto 24px;
          border-radius: 50%;
          border: 4px solid #00ffff;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #ff0080, #00ffff, #00ff00);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(255, 0, 128, 0.3);
        }

        .avatar-container:hover {
          transform: scale(1.05);
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .avatar-ring {
          position: absolute;
          inset: -8px;
          border: 2px solid #ff0080;
          border-radius: 50%;
          animation: rotate 4s linear infinite;
          box-shadow: 0 0 20px rgba(255, 0, 128, 0.6);
          z-index: 3;
        }

        .avatar-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(0, 255, 255, 0.2) 0%, 
            rgba(255, 0, 128, 0.3) 25%, 
            rgba(0, 255, 0, 0.2) 50%, 
            rgba(255, 255, 0, 0.2) 75%, 
            rgba(0, 255, 255, 0.2) 100%
          );
          border-radius: 50%;
          mix-blend-mode: overlay;
          animation: avatarPulse 4s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        .neural-display {
          width: 100%;
          height: 80px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 16px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          border: 2px solid #00ffff;
          box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.2);
        }

        .neural-activity {
          position: absolute;
          top: 50%;
          width: 100%;
          height: 4px;
          transform: translateY(-50%);
          background: linear-gradient(90deg, transparent, #00ffff, #ff0080, #00ff00, transparent);
        }

        .neural-activity.online {
          animation: neuralActivity 0.8s infinite;
        }

        .neural-activity.offline {
          animation: neuralScan 2s infinite;
        }

        .neural-label {
          position: absolute;
          top: 4px;
          right: 12px;
          font-size: 0.75rem;
          color: #00ff00;
          opacity: 0.7;
        }

        .status-container {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding: 16px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 12px;
          border: 1px solid #00ffff;
        }

        .status-indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: relative;
        }

        .status-indicator.online {
          background: #00ff00;
          box-shadow: 0 0 15px #00ff00;
        }

        .status-indicator.offline {
          background: #ff4444;
          box-shadow: 0 0 15px #ff4444;
          animation: pulse 1s infinite;
        }

        .status-ring {
          position: absolute;
          inset: -8px;
          border: 2px solid currentColor;
          border-radius: 50%;
          opacity: 0.5;
          animation: statusRing 2s infinite;
        }

        .status-text {
          font-size: 0.875rem;
          text-align: center;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #00ffff;
          border-top: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: ${isLoading ? 'block' : 'none'};
        }

        .functions-container {
          max-height: 256px;
          overflow-y: auto;
          margin-bottom: 24px;
        }

        .functions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .function-button {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 128, 0.1));
          border: 2px solid #00ffff;
          border-radius: 16px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.875rem;
          position: relative;
          overflow: hidden;
          color: #00ffff;
          font-family: 'Michroma', monospace;
        }

        .function-button:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(255, 0, 128, 0.3), rgba(0, 255, 255, 0.3));
          border-color: #ff0080;
          box-shadow: 0 8px 16px rgba(0, 255, 255, 0.5);
          transform: translateY(-4px) scale(1.05);
        }

        .function-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: linear-gradient(135deg, rgba(128, 128, 128, 0.1), rgba(64, 64, 64, 0.1));
          border-color: #666;
        }

        .function-button .shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }

        .function-button:hover .shine {
          transform: translateX(100%);
        }

        .chat-terminal {
          flex: 1;
          background: rgba(0, 0, 0, 0.9);
          border: 2px solid #00ffff;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
          height: 400px;
          overflow-y: auto;
          font-family: 'Courier New', monospace;
          position: relative;
        }

        .chat-header {
          position: absolute;
          top: 8px;
          right: 16px;
          font-size: 0.75rem;
          color: #00ff00;
          opacity: 0.7;
        }

        .message {
          margin-bottom: 16px;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.875rem;
          line-height: 1.5;
          position: relative;
          animation: fadeInMessage 0.5s ease-in;
          word-wrap: break-word;
          white-space: pre-wrap;
        }

        .message.user {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.1));
          border-left: 4px solid #00ffff;
          margin-left: 32px;
          color: #00ffff;
        }

        .message.priestess {
          background: linear-gradient(135deg, rgba(255, 0, 128, 0.2), rgba(255, 0, 128, 0.1));
          border-left: 4px solid #ff0080;
          margin-right: 32px;
          color: #ff0080;
        }

        .message.system {
          background: linear-gradient(135deg, rgba(255, 255, 0, 0.2), rgba(255, 255, 0, 0.1));
          border-left: 4px solid #ffff00;
          color: #ffff00;
          text-align: center;
          margin: 0 16px;
        }

        .message-header {
          font-weight: bold;
          font-size: 0.75rem;
          margin-bottom: 4px;
        }

        .message-timestamp {
          position: absolute;
          bottom: 4px;
          right: 8px;
          font-size: 0.6rem;
          opacity: 0.3;
        }

        .input-container {
          display: flex;
          gap: 16px;
        }

        .input-field {
          flex: 1;
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid #00ffff;
          border-radius: 12px;
          padding: 16px;
          color: #00ffff;
          font-family: 'Michroma', monospace;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-field:focus {
          border-color: #ff0080;
          box-shadow: 0 0 20px rgba(255, 0, 128, 0.2);
        }

        .input-field:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .input-field::placeholder {
          color: rgba(0, 255, 255, 0.5);
        }

        .transmit-button {
          background: linear-gradient(45deg, #00ffff, #ff0080);
          color: white;
          font-weight: bold;
          padding: 16px 24px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Michroma', monospace;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .transmit-button:hover:not(:disabled) {
          background: linear-gradient(45deg, #ff0080, #00ff00);
          transform: scale(1.05);
        }

        .transmit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: linear-gradient(45deg, #666, #444);
        }

        .debug-info {
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid #00ffff;
          border-radius: 8px;
          padding: 12px;
          margin: 12px 0;
          color: #00ffff;
          font-size: 0.75rem;
          font-family: 'Courier New', monospace;
          max-height: 200px;
          overflow-y: auto;
          display: ${debugMode ? 'block' : 'none'};
        }

        .footer {
          text-align: center;
          padding: 20px;
          font-size: 0.875rem;
          opacity: 0.5;
          line-height: 1.6;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes borderGlow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes neuralScan {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes neuralActivity {
          0% { left: -100%; }
          20% { left: 10%; transform: translateY(-50%) scaleY(1); }
          25% { left: 15%; transform: translateY(-50%) scaleY(3); }
          30% { left: 20%; transform: translateY(-50%) scaleY(0.5); }
          35% { left: 25%; transform: translateY(-50%) scaleY(2); }
          40% { left: 30%; transform: translateY(-50%) scaleY(1); }
          100% { left: 100%; }
        }

        @keyframes statusRing {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeInMessage {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes avatarPulse {
          0%, 100% { 
            opacity: 0.4; 
            background: linear-gradient(135deg, 
              rgba(0, 255, 255, 0.2) 0%, 
              rgba(255, 0, 128, 0.3) 25%, 
              rgba(0, 255, 0, 0.2) 50%, 
              rgba(255, 255, 0, 0.2) 75%, 
              rgba(0, 255, 255, 0.2) 100%
            );
          }
          25% { 
            opacity: 0.6; 
            background: linear-gradient(135deg, 
              rgba(255, 0, 128, 0.3) 0%, 
              rgba(0, 255, 0, 0.2) 25%, 
              rgba(255, 255, 0, 0.3) 50%, 
              rgba(0, 255, 255, 0.2) 75%, 
              rgba(255, 0, 128, 0.3) 100%
            );
          }
          50% { 
            opacity: 0.8; 
            background: linear-gradient(135deg, 
              rgba(0, 255, 0, 0.2) 0%, 
              rgba(255, 255, 0, 0.3) 25%, 
              rgba(0, 255, 255, 0.3) 50%, 
              rgba(255, 0, 128, 0.2) 75%, 
              rgba(0, 255, 0, 0.3) 100%
            );
          }
          75% { 
            opacity: 0.6; 
            background: linear-gradient(135deg, 
              rgba(255, 255, 0, 0.3) 0%, 
              rgba(0, 255, 255, 0.2) 25%, 
              rgba(255, 0, 128, 0.3) 50%, 
              rgba(0, 255, 0, 0.2) 75%, 
              rgba(255, 255, 0, 0.3) 100%
            );
          }
        }

        @media (max-width: 768px) {
          .main-container {
            padding: 10px;
          }
          
          .priestess-interface {
            padding: 20px;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .functions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .input-container {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="priestess-widget">
        <div className="background-grid"></div>
        <div className="background-particles" id="particles"></div>

        <div className="main-container">
          <div className="priestess-interface">
            <div className="border-glow"></div>
            
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div className="header">
                <h1 className="title">⚡ PRIESTESS ⚡</h1>
                
                <div className="avatar-container">
                  <img 
                    src="/A captivating character design of a half robot, half voodoo doll woman. She has intricate dreadlocks made of colorful cables, intertwined with metallic threads. Her head features glowing needles, each emitting vibran.png"
                    alt="Priestess Avatar"
                    className="avatar-image"
                  />
                  <div className="avatar-overlay"></div>
                  <div className="avatar-ring"></div>
                </div>
              </div>

              <div className="neural-display">
                <div className={`neural-activity ${isOnline ? 'online' : 'offline'}`}></div>
                <div className="neural-label">AI NEURAL INTERFACE</div>
              </div>

              <div className="status-container">
                <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
                  <div className="status-ring"></div>
                </div>
                <div className="status-text">{statusText}</div>
                <div className="loading-spinner"></div>
              </div>

              <div className="debug-info">
                <strong>🔧 DEBUG INFORMATION:</strong>
                <div style={{ whiteSpace: 'pre-wrap' }}>{debugContent}</div>
              </div>

              <div className="functions-container">
                <div className="functions-grid">
                  <button 
                    className="function-button" 
                    onClick={initializePriestess}
                    disabled={isOnline}
                  >
                    <div className="shine"></div>
                    Initialize AI Core
                  </button>
                  
                  <button 
                    className="function-button" 
                    onClick={runDiagnostics}
                    disabled={!isOnline}
                  >
                    <div className="shine"></div>
                    System Diagnostics
                  </button>
                  
                  <button 
                    className="function-button" 
                    onClick={requestCodeHelp}
                    disabled={!isOnline}
                  >
                    <div className="shine"></div>
                    Code Assistance
                  </button>
                  
                  <button 
                    className="function-button" 
                    onClick={requestSecurity}
                    disabled={!isOnline}
                  >
                    <div className="shine"></div>
                    Cybersecurity
                  </button>
                  
                  <button 
                    className="function-button" 
                    onClick={requestOptimization}
                    disabled={!isOnline}
                  >
                    <div className="shine"></div>
                    AI Optimization
                  </button>
                  
                  <button 
                    className="function-button" 
                    onClick={toggleDebug}
                  >
                    <div className="shine"></div>
                    Toggle Debug
                  </button>
                </div>
              </div>

              <div className="chat-terminal" ref={chatTerminalRef}>
                <div className="chat-header">PRIESTESS AI NEURAL INTERFACE</div>
                <div>
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`message ${message.isSystem ? 'system' : (message.isUser ? 'user' : 'priestess')}`}
                    >
                      <div className="message-header">
                        {message.isSystem ? 'SYSTEM > ' : (message.isUser ? 'USER > ' : 'PRIESTESS > ')}
                      </div>
                      <div>{message.text}</div>
                      <div className="message-timestamp">{message.timestamp}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="input-container">
                <input 
                  type="text" 
                  className="input-field"
                  placeholder={isOnline ? "Interface with Priestess..." : "AI consciousness dormant..."}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={!isOnline}
                />
                <button 
                  className="transmit-button" 
                  onClick={transmitMessage}
                  disabled={!isOnline}
                >
                  <span style={{ position: 'relative' }}>TRANSMIT</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          &copy; 2025 Priestess - Neural AI Assistant Designed by Dr Vudu<br/>
          Made by Dr Vudu & Code.New AI<br/>
          Powered by Advanced AI Simulation Engine<br/>
          &copy; 2025 Dr Vudu Ai Laboratories. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default PriestessWidget;