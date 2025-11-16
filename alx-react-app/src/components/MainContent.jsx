import { useState } from 'react';
import WelcomeMessage from './WelcomeMessage.jsx';
import reactLogo from './react.svg'; // react.svg is in src/components
import viteLogo from '/vite.svg';    // vite.svg is in public/

function MainContent() {
  // Counter state
  const [count, setCount] = useState(0);

  return (
    <main>

      {/* Original Paragraph */}
      <p>I love to visit New York, Paris, and Tokyo.</p>

      {/* The custom WelcomeMessage */}
      <div className="welcome-section">
        <WelcomeMessage />
      </div>

      {/* Logos section */}
      <div className="logo-section">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1>Vite + React</h1>

      {/* Counter section */}
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </main>
  );
}
export default MainContent;
