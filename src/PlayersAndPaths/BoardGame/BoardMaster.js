import React from 'react';
import Grid from 'react-css-grid';

import Tile from './Tile';
import Piece from './Piece';
import Path from './Path';
import CentralSphere from './CentralSphere'

import './Style/BoardMaster.css';


class BoardMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diceRolled: false,
            diceResult: null,
            enigmaOn: false,
            gameEnd: 0,
            
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
    
    // affiche les cases du plateau en faisant appel aux composants selon leur qualité
    // (pion, parcours du pion en jeu, ou simple tuile)
    currentBoard = () => {
        const { board, playerTurn, currentPlayer } = this.props;
        const { players } = this.state;
        let positions = (players.map(player => player.playerPosition))

        let currentPath = players.filter(player => player.player === playerTurn).map(filteredPlayer => filteredPlayer.path)
        // let player = players.player; else if (&& player === playerTurn)
        //console.log(players)
        console.log(currentPath)
        
        return board.map(number => {
            if (positions.includes(number)) {
                return <Piece number={number} />
            } else if (currentPath[0].includes(number)) {
                return <Path number={number} playerTurn={playerTurn} />
            }
            else {
                return <Tile number={number} />
            };
        });
    }


    // gère le lancé de dés et met à jour la position du joueur
    handleDiceRolled = () => {
        const { diceResult, diceRolled  } = this.state

        let Result = Math.ceil(Math.random() * 6);
        // let pathEnd = path.pop() si le path est généré aléatoirement

        this.setState({ diceRolled : !diceRolled });
        this.setState({ enigmaOn : true });
        this.setState({ diceResult : Result});
    }

    // met à jour la position du joueur et repére s'il arrive sur la case de fin
    updatePlayerPosition = () => {
        const { playerPosition, path, pathEnd, players } = this.state;
        const { diceRolled, diceResult } = this.state;

        if (diceRolled) {
            let move = playerPosition + diceResult
            let newPosition = path[move]
            let tileLeft = (path.slice(playerPosition)).lenght

            if(newPosition !== pathEnd) { // ça peut pas fonctionner ! voir plutôt si move > nbr de cases qu'il reste
                this.setState({playerPosition : newPosition})
            } else {
                this.setState({playerPosition : pathEnd});
                this.setState({gameEnd: 1})
            }
        }
    }





    render () {
        const { board, playerTurn, currentPlayer } = this.props;
        const {diceRolled, diceResult , enigmaOn } = this.state;

        return (
            <div className="AEffacer">
            <div className="TileboardContent">

                <CentralSphere
                    diceRolled = {diceRolled}
                    handleDiceRolled = {this.handleDiceRolled}
                    enigmaOn = {enigmaOn}
                    playerTurn={playerTurn}
                    currentPlayer={currentPlayer}/>

                <div className="TileBoard">
                    <Grid
                        width={60}
                        gap={2}
                     >{this.currentBoard()}
                    </Grid>
                </div>
            </div>
            <button onClick = {this.handleDiceRolled} disabled = { diceRolled }> { diceRolled ? diceResult : "not rolled" }</button>
            <button onClick={this.updatePlayerPosition}>Moove</button>
            </div>


        );
    }
}

export default BoardMaster;