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
          name: "Alan",
          player: 1,
          playerPosition: 0,
          path: [0,1,9,17,25,24,32,40,41,42,43,35],
          pathEnd: 35,
        },
        {
          id: "player2", 
          player: 2,
          name: "Judy",
          playerPosition: 7,
          path: [7,15,14,13,12,4,3,11,10,18,26,27],
          pathEnd: 27,
        },
        {
          id: "player4",
          name: "Peter",
          player: 4,
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
  // ici pour afficher les 4 pions
  //board.map(number =>
  //if (board.includes(number)){
  //  if (playerPosition === number){
  //  return <Piece number={number} />
  // } else {
  //  return <Tile number={number} />
  // }
  


  //Gestion du tour de jeu
  handlePlayerTurn = () => {
    const { playerTurn, players } = this.state
    const numbersOfPlayers = players.length

      if (playerTurn < numbersOfPlayers) {
        this.setState({ playerTurn : playerTurn +1 })
      } else {
        this.setState({ playerTurn : 1 })
      }
  }
  



  render() {
    const { board, diceRolled ,playerTurn, players, name } = this.state;
    console.log(playerTurn)


    return (
      <div>
        
        <button onClick={ this.handlePlayerTurn } >Player : {playerTurn}</button>

        <div className="BoardContainer">
          <BoardMaster board={board} playerTurn={playerTurn}></BoardMaster>
        </div>
      </div>
    );
  }
}


export default Game;