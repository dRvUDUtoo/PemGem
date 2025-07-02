# Priestess Widget Embedding Guide

## Quick Start (30 seconds)

### Step 1: Copy the Widget File
Copy `src/components/PriestessWidget.tsx` to your project's components folder.

### Step 2: Basic Integration
```jsx
import PriestessWidget from './components/PriestessWidget';

function App() {
  return (
    <div>
      {/* Your existing app content */}
      
      {/* Add Priestess Widget */}
      <PriestessWidget />
    </div>
  );
}
```

### Step 3: Done!
Priestess will appear in the bottom-right corner, ready to use.

---

## Complete Integration Options

### Option 1: Always Visible Widget
```jsx
import PriestessWidget from './components/PriestessWidget';

function App() {
  return (
    <div>
      <h1>My Application</h1>
      {/* Your content */}
      
      <PriestessWidget 
        position="bottom-right"
        size="medium"
        autoStart={true}
      />
    </div>
  );
}
```

### Option 2: Toggleable Widget
```jsx
import { useState } from 'react';
import PriestessWidget from './components/PriestessWidget';

function App() {
  const [showPriestess, setShowPriestess] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPriestess(!showPriestess)}>
        {showPriestess ? 'Hide' : 'Show'} Priestess
      </button>
      
      {showPriestess && (
        <PriestessWidget 
          closable={true}
          onClose={() => setShowPriestess(false)}
        />
      )}
    </div>
  );
}
```

### Option 3: Page-Specific Widget
```jsx
import PriestessWidget from './components/PriestessWidget';

function CodeEditorPage() {
  return (
    <div>
      <div>Your code editor</div>
      
      {/* Priestess for coding help */}
      <PriestessWidget 
        position="top-right"
        size="large"
        autoStart={true}
      />
    </div>
  );
}
```

---

## Configuration Options

### Position Options
```jsx
<PriestessWidget position="bottom-right" />  {/* Default */}
<PriestessWidget position="bottom-left" />
<PriestessWidget position="top-right" />
<PriestessWidget position="top-left" />
<PriestessWidget position="center" />        {/* Modal-style */}
```

### Size Options
```jsx
<PriestessWidget size="small" />   {/* 320x384px */}
<PriestessWidget size="medium" />  {/* 384x480px - Default */}
<PriestessWidget size="large" />   {/* 512x672px */}
<PriestessWidget size="full" />    {/* Full screen */}
```

### Behavior Options
```jsx
<PriestessWidget 
  autoStart={true}        // Priestess connects automatically
  minimizable={true}      // Show minimize button
  closable={true}         // Show close button
  onClose={() => {}}      // Callback when closed
/>
```

---

## Installation Requirements

### Dependencies Needed
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1"
  }
}
```

### CSS Requirements
Ensure Tailwind CSS is configured and include this font:
```html
<link href="https://fonts.googleapis.com/css2?family=Michroma:wght@400&display=swap" rel="stylesheet">
```

---

## Integration Scenarios

### Scenario 1: Adding to Existing React App
1. Copy `PriestessWidget.tsx` to your components folder
2. Import and use: `<PriestessWidget />`
3. Done!

### Scenario 2: Adding to Next.js App
```jsx
// pages/_app.js or app/layout.js
import PriestessWidget from '../components/PriestessWidget';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PriestessWidget />
    </>
  );
}
```

### Scenario 3: Adding to Dashboard/Admin Panel
```jsx
// In your layout component
function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <nav>Navigation</nav>
      <main>{children}</main>
      
      {/* Priestess for help */}
      <PriestessWidget 
        position="bottom-left"
        size="medium"
        minimizable={true}
      />
    </div>
  );
}
```

### Scenario 4: Multiple Widgets (Different Configs)
```jsx
function App() {
  return (
    <div>
      {/* Different widgets for different purposes */}
      
      {/* Main help widget */}
      <PriestessWidget 
        position="bottom-right"
        size="medium"
      />
      
      {/* Code assistance widget */}
      <PriestessWidget 
        position="top-right"
        size="small"
        autoStart={true}
      />
    </div>
  );
}
```

---

## Advanced Examples

### Conditional Rendering
```jsx
function App() {
  const isLoggedIn = useAuth();
  const isCodePage = useLocation().pathname.includes('/code');

  return (
    <div>
      {/* Show Priestess only for logged-in users on code pages */}
      {isLoggedIn && isCodePage && (
        <PriestessWidget 
          autoStart={true}
          position="top-right"
        />
      )}
    </div>
  );
}
```

### Custom Styling Context
```jsx
function App() {
  return (
    <div className="dark-theme">
      <PriestessWidget />
    </div>
  );
}
```

### Integration with State Management
```jsx
function App() {
  const { showAssistant } = useAppStore();

  return (
    <div>
      {showAssistant && (
        <PriestessWidget 
          onClose={() => store.hideAssistant()}
        />
      )}
    </div>
  );
}
```

---

## File Structure After Integration

```
your-project/
├── src/
│   ├── components/
│   │   ├── PriestessWidget.tsx    ← Copy this file
│   │   └── ...your components
│   ├── App.tsx                    ← Add import and usage
│   └── ...
├── package.json
└── ...
```

---

## Zero-Conflict Integration

The widget is designed to be **completely self-contained**:
- ✅ No global state conflicts
- ✅ No CSS conflicts (scoped styling)
- ✅ No prop drilling required
- ✅ No external API dependencies
- ✅ Works with any React version 18+
- ✅ TypeScript ready
- ✅ Mobile responsive

---

## Quick Copy-Paste Examples

### Minimal Integration
```jsx
import PriestessWidget from './components/PriestessWidget';
<PriestessWidget />
```

### Full-Featured Integration
```jsx
import { useState } from 'react';
import PriestessWidget from './components/PriestessWidget';

function App() {
  const [showPriestess, setShowPriestess] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setShowPriestess(true)}
        className="fixed top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded"
      >
        🔮 Open Priestess
      </button>
      
      {showPriestess && (
        <PriestessWidget 
          position="center"
          size="large"
          autoStart={true}
          closable={true}
          minimizable={true}
          onClose={() => setShowPriestess(false)}
        />
      )}
    </div>
  );
}
```

---

That's it! Priestess is now embedded and ready to assist your users with AI development, cybersecurity, coding, and mystical-technological guidance.