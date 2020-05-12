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

  //création du plateau de jeu : tableau de cells key=value
  createBoard = () => {
    const { board } = this.state;
    for (let tile = 0; tile <64; tile ++){
        board.push(tile)
    }
    return this.setState({ board: board })
  }

  render() {
    const { board, diceRolled ,playerTurn } = this.state;

    return (
      <div>
        <div className="BoardContainer">
          <BoardMaster board={board} playerTurn={playerTurn}></BoardMaster>
        </div>
      </div>
    );
  }
}


export default Game;