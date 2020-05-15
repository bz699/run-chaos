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

         //   enigmaOn: false,

        }
    }

    // update de currentBoard lorsque le pion a avancé (click moove)
    componentDidUpdate = () => {

    }
    

    // affiche les cases du plateau en faisant appel aux composants selon leur qualité
    // (pion, parcours du pion en jeu, ou simple tuile)
    currentBoard = () => {
        const { board, playerTurn, currentPlayer, inactivePlayers } = this.props;
        
        let position = currentPlayer.playerPosition
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


    render () {
        const { playerTurn, currentPlayer, diceRolled, diceResult , enigmaOn, handleDiceRolled, updatePlayerPosition} = this.props;
        const { rien } = this.state;

        return (
            <div className="AEffacer">
            <div className="TileboardContent">

                <CentralSphere
                    diceRolled = {diceRolled}
                    handleDiceRolled = {handleDiceRolled}
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
            <button onClick = {handleDiceRolled} disabled = { diceRolled }> { diceRolled ? diceResult : "not rolled" }</button>
            <button onClick = {updatePlayerPosition}>Moove </button>
            </div>


        );
    }
}

export default BoardMaster;