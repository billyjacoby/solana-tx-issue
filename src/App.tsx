import React from 'react';
import './App.css';
import { SendRandom } from './SendRandom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SendRandom />
        {/* <button>Request Airdrop</button> */}
      </header>
    </div>
  );
}

export default App;
