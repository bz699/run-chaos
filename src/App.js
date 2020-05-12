import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Morpion from './TutoReact/Morpion'
import SelectPlayers from './PlayersAndPaths/Players/SelectPlayers'
import Game from './PlayersAndPaths/BoardGame/Game'


// import BoardMaster from './PlayersAndPaths/BoardMaster'

function App() {
  
  return (
    <BrowserRouter>

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
        <Switch>
          
          <Route exact path= "/" component={SelectPlayers} />
          <Route path="/Game" component={Game} />
        
        </Switch>
        
        {/* <BoardMaster /> */}
      
      
      </div>
    </BrowserRouter>
    );
    
    
    
}

export default App;
