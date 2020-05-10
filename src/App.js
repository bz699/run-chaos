import React from 'react';
import logo from './logo.svg';
import './App.css';

import Morpion from './TutoReact/Morpion'
import BoardMaster from './PlayersAndPaths/BoardMaster'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Run chaos
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React
        </a>
      </header>
      <BoardMaster />
    </div>
  );
}

export default App;
