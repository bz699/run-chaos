import React from 'react';
import Grid from 'react-css-grid';

import Tile from './Tile';
import Piece from './Piece';
import Path from './Path';

import './Style/BoardMaster.css';


class BoardMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBoard: [],
            playerPosition: 1,
            path: [0,1,2,3,4,8,12,11],
            pathEnd: [11],
            gameEnd: 0,
            diceRolled: false,
            diceResult: null,
        }
    }

    // gère le lancé de dés et met à jour la position du joueur
    handleDiceRolled = () => {
        const { diceResult, diceRolled, playerPosition } = this.state
        let Result = Math.floor(1 + Math.random() * 5);

        this.setState({ diceRolled : !diceRolled });
        this.setState({ diceResult : Result});
        this.updatePlayerPosition()
    }

    // met à jour la position du joueur et repére s'il arrive sur la case de fin
    updatePlayerPosition = () => {
        const { playerPosition, diceRolled, diceResult, pathEnd } = this.state;
        if (diceRolled) {
            let updatePlayerPosition = playerPosition + diceResult
            if(updatePlayerPosition < pathEnd) {
                this.setState({playerPosition : updatePlayerPosition})
            } else {
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
        const {diceRolled, diceResult} = this.state
        console.log(diceRolled)

        return (
            <div>
                <div className="TileBoard">
                    <Grid
                        width={60}
                        gap={2}
                     >{this.currentPath()}
                    </Grid>
                </div>
                <button onClick = {this.handleDiceRolled} disabled = { diceRolled }> { diceRolled ? diceResult : "Roll Dices" }</button>
                <button onClick={this.updatePlayerPosition}>Moove</button>
            </div>


        );
    }
}

export default BoardMaster;