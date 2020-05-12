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
            currentBoard: [],
            playerPosition: 0,
            path: [0,1,2,3,4,5,6,14,22,30,38,37],
            pathEnd: 37,
            gameEnd: 0,
        }
    }
    


    // gère le lancé de dés et met à jour la position du joueur
    handleDiceRolled = () => {
        const { diceResult, diceRolled, playerPosition } = this.state
        let Result = Math.floor(Math.random() * 6);
        // let pathEnd = path.pop() si le path est généré aléatoirement

        this.setState({ diceRolled : !diceRolled });
        this.setState({ enigmaOn : true });
        this.setState({ diceResult : Result});
    }

    // met à jour la position du joueur et repére s'il arrive sur la case de fin
    updatePlayerPosition = () => {
        const { playerPosition, diceRolled, diceResult, path, pathEnd } = this.state;

        if (diceRolled) {
            let move = playerPosition + diceResult
            let newPosition = path[move]

            if(newPosition !== pathEnd) { // ça peut pas fonctionner ! voir plutôt si move > nbr de cases qu'il reste
                this.setState({playerPosition : newPosition})
            } else {
                this.setState({playerPosition : pathEnd})
                this.setState({gameEnd: 1})
            }
        }
    }

    // affiche les cases du plateau en faisant appel aux composant selon leur qualité (pion, parcours, ou simple tuile)
    currentPath = () => {
        const { board } = this.props;
        const { path, playerPosition } = this.state;
        
        return board.map(number => {
            if(path.includes(number)) {
                if (playerPosition === number){
                    return <Piece number={number} />
                } else {
                    return <Path number={number} />
                };
            } else {
                return <Tile number={number} />
            };
        });
    }

 



    render () {
        const { board, playerTurn } = this.props;
        const {diceRolled, diceResult , enigmaOn } = this.state
        console.log(enigmaOn)

        return (
            <div className="AEffacer">
            <div className="TileboardContent">
                <CentralSphere enigmaOn = {enigmaOn}/>
                <div className="TileBoard">
                    <Grid
                        width={60}
                        gap={2}
                     >{this.currentPath()}
                    </Grid>
                </div>
            </div>
            <button onClick = {this.handleDiceRolled} disabled = { diceRolled }> { diceRolled ? diceResult : "Roll Dices" }</button>
            <button onClick={this.updatePlayerPosition}>Moove</button>
            </div>


        );
    }
}

export default BoardMaster;