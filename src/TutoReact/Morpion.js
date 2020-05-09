import React from 'react';
import "./Morpion.css";

import Board from './Board' 



  class Morpion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          { squares: Array(9).fill(null) }
        ],
        stepNumber: 0,
        xIsNext: true,
      };
    }

    handleClickOnSquare(i) {
      const history = this.state.history.slice(0, this.state.stepNumber +1)
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (this.calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
      this.setState ({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }


    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
    

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = this.calculateWinner(current.squares);

      let status;
        if (winner) {
          status = winner + ' a gagné';
        } else {
          status = 'Next Player : ' + (this.state.xIsNext ? 'X' : 'O');
        };
      
      const moves = history.map((step, move) => {
      const desc = move
        ? 'Back to turn n°' + move
        : 'Start Again';
        return (
          <li key = { move }>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });


      return (
        <div className="game">        
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClickOnSquare(i)}
             />
          </div>
        
          <div className="game-info">
        
            <div>{status}</div>
        
            <ol>{moves}</ol>
        
          </div>
        </div>
      );
    }
  }



export default Morpion;