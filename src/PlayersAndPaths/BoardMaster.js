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
            DiceResult: 4,
            Board: [],
            PlayerPosition: 0,
            Path: [0,1,2,6,10,9,13,14],
        }
    }

    componentDidMount(){
        this.currentPlayerPosition();
    }

 

    displayBoard = () => {
        let Board = this.state.Board
        for (let tile = 0; tile <16; tile ++){
            Board.push(tile)
        }
        return this.currentPath(Board)
    }

    currentPath = (Board) => {
        let iPath = this.state.Path
        return Board.map(number =>
            iPath.includes(number)
            ? <Path number={number} />
            : <Tile number={number} />
        )
    }

    currentPlayerPosition = (Board) => {
        let iPosition = this.state.PlayerPosition
        let board = this.state.Board
        let findPlayerPosition = (array, tile) => array.includes(tile)
        if (findPlayerPosition(board, iPosition) === true) {
            return <Piece />
        }
    }
    

    updateCurrentPlayerPosition = (position) => {
        let updateCurrentPlayerPosition = this.state.PlayerPosition + this.state.DiceResult
        this.setState({PlayerPosition : updateCurrentPlayerPosition})    
    }

    handlePieceMovement = () => {
        
    }

 
    



    render () {
    console.log(this.currentPlayerPosition)

        return (

            <div className="TileBoard">

                <Grid
                    width={60}
                    gap={2}
                >
                {this.displayBoard()}
                </Grid>
            </div>


        );
    }
}

export default BoardMaster;