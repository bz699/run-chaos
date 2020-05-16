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
    
    
    
    // affiche les cases du plateau en faisant appel aux composants selon leur qualité
    // (pion, parcours du pion en jeu, ou simple tuile)
    currentBoard = () => {
        const { board, playerTurn, players } = this.props;
        

        // création d'un tableau contenant les cases des autres pions
        let otherPlayers = players.map(player => player)
        let playingPlayer = otherPlayers.splice(playerTurn-1, 1)[0]
        console.log(playingPlayer)
        let position = playingPlayer.playerPosition
        let positions = (otherPlayers.map(player => player.playerPosition))
        let currentPath = playingPlayer.path
        
        
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
        const { playerTurn, currentPlayer, diceRolled, diceResult , enigmaOn, handleDiceRolled, updatePlayerPosition, changePlayerTurn} = this.props;
        const { rien } = this.state;

        return (
            <div className="AEffacer">
                <div className="TileboardContent">

                    <CentralSphere
                        diceRolled = {diceRolled}
                        handleDiceRolled = {handleDiceRolled}
                        enigmaOn = {enigmaOn}
                        playerTurn={playerTurn}
                        currentPlayer={currentPlayer}
                        changePlayerTurn={changePlayerTurn}/>
                        {/* ajouter changeTurn */} 

                    <div className="TileBoard">
                        <Grid
                            width={60}
                            gap={2}
                        >{this.currentBoard()}
                        </Grid>
                    </div>
                </div>
                <div className="allButtons">
                    <button onClick = {handleDiceRolled} disabled = { diceRolled }> { diceRolled ? diceResult : "roll dices" }</button>
                    <button onClick = {updatePlayerPosition} disabled = { enigmaOn }>Move </button>
                    <button onClick={ changePlayerTurn } >Player : {playerTurn} <br/> Change Turn</button>
                </div>
            </div>


        );
    }
}

export default BoardMaster;