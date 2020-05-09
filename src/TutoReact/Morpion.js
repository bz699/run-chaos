import React from 'react';
import "./Morpion.css";

import Board from './Board' 



  class Morpion extends React.Component {

    render() {

      return (
        <div className="game">
        
          <div className="game-board">
            <Board />
          </div>
        
          <div className="game-info">
        
            <div>{/* status */}</div>
        
            <ol>{/* TODO */}</ol>
        
          </div>
        </div>
      );
    }
  }


export default Morpion;