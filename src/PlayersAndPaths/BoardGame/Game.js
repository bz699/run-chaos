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


      players: [
        {
          player: 1,
          idusers: 11,
          name: "Alan",
          playerIndex: 0,
          path: [0, 1, 9, 17, 25, 24, 32, 40, 41, 42, 43, 35],
        },
        {
          player: 2,
          idusers: 31,
          name: "Judy",
          playerIndex: 0,
          path: [7, 15, 14, 13, 12, 4, 3, 2, 10, 18, 26, 27],
        },
        {
          player: 3,
          idusers: 41,
          name: "Peter",
          playerIndex: 0,
          path: [56, 48, 49, 50, 51, 59, 60, 61, 53, 45, 49, 37, 36],
        }
      ]

    }
  }

  componentDidMount() {
    this.createBoard();
    //this.handleDiceRolled();
    //this.updatePlayerPosition();
  }



  //création du plateau de jeu vierge : tableau de cells key=value
  createBoard = () => {
    const { board } = this.state;
    for (let tile = 0; tile < 64; tile++) {
      board.push(tile)
    }
    return this.setState({ board: board })
  }

  //Gestion du tour de jeu
  changePlayerTurn = () => {
    const { playerTurn, players } = this.state
    const numbersOfPlayers = players.length

    this.setState({ enigmaOn: false })
    this.setState({ diceResult: null })
    this.setState({ diceRolled: false })

    if (playerTurn < numbersOfPlayers) {
      this.setState({ playerTurn: playerTurn + 1 })

    } else {
      this.setState({ playerTurn: 1 })
    }
  }



  //Lancé de dé : resultat et mise à jour des states
  handleDiceRolled = () => {
    let Result = Math.ceil(Math.random() * 2);
    this.setState({ diceRolled: true });
    this.setState({ diceResult: Result });
  }


  // met à jour la position du joueur et repére s'il arrive sur la case de fin
  updatePlayerPosition = () => {
    const { diceRolled, diceResult, playerTurn, players } = this.state;

    let playingPlayer = players[playerTurn - 1]
    let currentPath = playingPlayer.path
    let currentIndex = playingPlayer.playerIndex


    if (diceRolled) {
      let newIndex = currentIndex + diceResult

      if (currentPath[newIndex] === undefined) {
        this.setState({ gameEnd: 1 });
        // ajouter le setState dans tableau players player === playerTurn
      } else {
        this.setState({ enigmaOn: true })
        this.setState(state => {
        state.players[playerTurn - 1].playerIndex = newIndex
          return state
        }
        );
      }
    }
  }



  render() {
    const { board, playerTurn, players, diceRolled, diceResult, enigmaOn } = this.state;

    console.log("---C'est le tour du joueur " + playerTurn)
    return (
      <div>
        <div className="BoardContainer">
          <BoardMaster
            board={board}
            playerTurn={playerTurn}
            players={players}
            diceRolled={diceRolled}
            diceResult={diceResult}
            handleDiceRolled={this.handleDiceRolled}
            updatePlayerPosition={this.updatePlayerPosition}
            enigmaOn={enigmaOn}
            changePlayerTurn={this.changePlayerTurn}
          >
          </BoardMaster>
        </div>
      </div>
    );
  }
}


export default Game;