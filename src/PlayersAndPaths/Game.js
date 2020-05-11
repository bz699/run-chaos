import React from 'react';
import './Style/Game.css';

// import Tile from './Tile';
import BoardMaster from './BoardMaster';



class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 1,
      board: []
    }
  }

  componentDidMount() {
    this.createBoard()
  }

  createBoard = () => {
    const { board } = this.state;
    for (let tile = 0; tile <16; tile ++){
        board.push(tile)
    }
    return this.setState({ board: board })
  }

  render() {
    const { board, diceRolled ,diceResult, playerTurn } = this.state;

    return (
      <div>
      <BoardMaster board={board} playerTurn={playerTurn}></BoardMaster>
      </div>
    );
  }
}


export default Game;