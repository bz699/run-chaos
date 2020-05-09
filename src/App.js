import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './TutoReact/Morpion'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ha ha ha ! Run Chaos !
        </p>
        <Square />
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
