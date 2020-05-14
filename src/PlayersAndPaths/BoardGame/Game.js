import React from 'react';
import './Style/Game.css';

// import Tile from './Tile';
import BoardMaster from './BoardMaster';



class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      diceRolled: false,
      diceResult: null,
      enigmaOn: false,
      gameEnd: 0,

      board: [],
      playerTurn: 1,

      currentPlayer:[{}],

      inactivePlayers:[],

      players: [
        {
          player: 1,
          idusers: 11,
          name: "Alan",
          playerPosition: 0,
          path: [0,1,9,17,25,24,32,40,41,42,43,35],
          pathEnd: 35},
        {
          player: 2,
          idusers: 31, 
          name: "Judy",
          playerPosition: 7,
          path: [7,15,14,13,12,4,3,2,10,18,26,27],
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
      ]

    }
  }

  componentDidMount() {
    this.createBoard();
    this.currentPlayer();
    this.inactivePlayers();
  }


  //création du plateau de jeu vierge : tableau de cells key=value
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

  //filtre les joueurs dont ce n'est pas le tour pour remplir inactivePlayers
  inactivePlayers = () => {
    const {players, playerTurn} = this.state
    const extractedPlayers = players.filter(player => player.player !== playerTurn)
    this.setState({ inactivePlayers : extractedPlayers })
    }


  //Lancé de dé : resultat et mise à jour des states
  handleDiceRolled = () => {
      let Result = Math.ceil(Math.random() * 6);
      this.setState({ diceRolled : true });
      this.setState({ enigmaOn : true });
      this.setState({ diceResult : Result});
      }
  
  
      // met à jour la position du joueur et repére s'il arrive sur la case de fin
      updatePlayerPosition = () => {
          const { currentPlayer, diceRolled, diceResult } = this.state;
          const playingPlayer = currentPlayer[0]
          
  
          let currentPath= playingPlayer.path
          let position = playingPlayer.playerPosition
          let tilesLeft = (currentPath.slice(position)).length
          
  
          if (diceRolled) {
              let move = position + diceResult
              let newPosition = currentPath[move]
              
  
              if( move > tilesLeft) {
              this.setState({gameEnd: 1})
                  // ajouter le setState dans tableau players player === playerTurn
              } else {
                  this.setState({playerPosition : newPosition})
                  this.setState({gameEnd: 0})
              }
          }
      }



  render() {
    const { board, playerTurn, currentPlayer, inactivePlayers, diceRolled, diceResult, enigmaOn } = this.state;
    console.log(currentPlayer)

    return (
      <div>
        
        <button onClick={ this.handlePlayerTurn } >Player : {playerTurn}</button>

        <div className="BoardContainer">
          <BoardMaster
            board={board}
            playerTurn={playerTurn}
            currentPlayer={currentPlayer[0]}
            inactivePlayers={inactivePlayers}
            diceRolled = {diceRolled}
            diceResult = {diceResult}
            handleDiceRolled = {this.handleDiceRolled}
            updatePlayerPosition = {this.updatePlayerPosition}
            enigmaOn = {enigmaOn}
            >

          </BoardMaster>
        </div>
      </div>
    );
  }
}


export default Game;