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
        }
    }
    

    // affiche les cases du plateau en faisant appel aux composants selon leur qualité
    // (pion, parcours du pion en jeu, ou simple tuile)
    currentBoard = () => {
        const { board, playerTurn, currentPlayer, inactivePlayers } = this.props;
        console.log(inactivePlayers)
        console.log(inactivePlayers)
        
        let position = currentPlayer.playerPosition
        console.log(position)
        let currentPath = currentPlayer.path
        // création d'un tableau contenant les cases des autres pions
        let positions = (inactivePlayers.map(player => player.playerPosition))
        
        return board.map(number => {
            if (position === number){
                return <Piece number={number}/> } 
            if (positions.includes(number)) {
                return <Piece number={number} />
            } else if (currentPath.includes(number)) {
                return <Path number={number} playerTurn={playerTurn} />
            }
            else {
                return <Tile number={number} />
            };
        });
    }


    // gère le lancé de dés et met à jour la position du joueur
    handleDiceRolled = () => {
        let Result = Math.ceil(Math.random() * 6);
            this.setState({ diceRolled : true });
            this.setState({ enigmaOn : true });
            this.setState({ diceResult : Result});
    }


    // met à jour la position du joueur et repére s'il arrive sur la case de fin
    updatePlayerPosition = () => {
        const { diceRolled, diceResult, players } = this.state;
        const { playerTurn, currentPlayer } = this.props;

        let currentPath= currentPlayer.path
        let position = currentPlayer.playerPosition
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



    render () {
        const { playerTurn, currentPlayer } = this.props; 
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