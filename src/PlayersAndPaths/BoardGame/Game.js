import React from 'react';
import './Style/Game.css';

// import Tile from './Tile';
import BoardMaster from './BoardMaster';



class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      board: [],
      playerTurn: 1,
      currentPlayer:[{
        player: 1,
        idusers: 11,
        name: "Alan",
        playerPosition: 0,
        path: [0,1,9,17,25,24,32,40,41,42,43,35],
        pathEnd: 35}],
      
      players: [
        {
          player: 1,
          idusers: 11,
          name: "Alan",
          playerPosition: 0,
          path: [0,1,9,17,25,24,32,40,41,42,43,35],
          pathEnd: 35,
        },
        {
          player: 2,
          idusers: 31, 
          name: "Judy",
          playerPosition: 7,
          path: [7,15,14,13,12,4,3,11,10,18,26,27],
          pathEnd: 27,
        },
        { 
          player: 3,
          idusers: 41,
          name: "Peter",
          playerPosition: 56,
          path: [56,48,49,50,51,59,60,61,53,45,49,37,36],
          pathEnd: 36,
        }
      ],
    }
  }

  componentDidMount() {
    this.createBoard();
    this.currentPlayer();
  }


  //création du plateau de jeu : tableau de cells key=value
  createBoard = () => {
    const { board } = this.state;
    for (let tile = 0; tile <64; tile ++){
        board.push(tile)
    }
    return this.setState({ board: board })
  }


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

    //filtre le joueur dont c'est le tour de jeu pour remplir le state currentPlayer
    currentPlayer = () => {
      const { players, playerTurn } = this.state
      const extractedPlayer = players.filter(player => player.player === playerTurn)
      this.setState({ currentPlayer : extractedPlayer })
    }



  render() {
    const { board, currentPlayer, playerTurn } = this.state;

    return (
      <div>
        
        <button onClick={ this.handlePlayerTurn } >Player : {playerTurn}</button>

        <div className="BoardContainer">
          <BoardMaster playerTurn={playerTurn} board={board} currentPlayer={currentPlayer[0]}></BoardMaster>
        </div>
      </div>
    );
  }
}


export default Game;