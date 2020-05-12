import React from 'react';
import './Style/Game.css';

// import Tile from './Tile';
import BoardMaster from './BoardMaster';



class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: "player1",
          player: 1,
          selected: true,
          OnTurn: true,
          playerPosition: 0,
          path: [0,1,9,17,25,24,32,40,41,42,43,35],
          pathEnd: 35,

        },
        {
          id: "player2",
          player: 2,
          selected: true,
          OnTurn: false,
          playerPosition: 7,
          path: [7,15,14,13,12,4,3,11,10,18,26,27],
          pathEnd: 27,
        },
        {
          id: "player3",
          player: 3,
          selected: false,
          OnTurn: false,
          playerPosition: 7,
          path: [63,62,54,46,38,39,31,23,22,21,20,28],
          pathEnd: 28,
        },
        {
          id: "player4",
          player: 4,
          OnTurn: false,
          selected: false,
          playerPosition: 56,
          path: [56,48,49,50,51,59,60,52,53,49,37,36],
          pathEnd: 36,
        }
      ],
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

  //gestion du tour de jeu



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