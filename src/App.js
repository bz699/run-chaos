import React from 'react';
import logo from './logo.svg';
import './App.css';

import Morpion from './TutoReact/Morpion'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Run Chaos !
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Morpion />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
