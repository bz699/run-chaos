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
        this.CurrentBoard();
    }
 

    CurrentBoard = () => {
        let Board = this.state.Board
        for (let tile = 0; tile <16; tile ++){
            Board.push(tile)
        }
        return this.currentPlayerPosition(Board)
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
        return Board.map(number => (
            iPosition === number
            ? <Piece number={number} />
            : <Tile number={number} />
        ))
    }
    

    updateCurrentPlayerPosition = (position) => {
        let updateCurrentPlayerPosition = this.state.PlayerPosition + this.state.DiceResult
        this.setState({PlayerPosition : updateCurrentPlayerPosition})    
    }

    handlePieceMovement = () => {
        let PlayerPosition = this.state.PlayerPosition
        let DiceResult = this.state.DiceResult
        let Destination = PlayerPosition + DiceResult
        while (PlayerPosition < Destination){
        return <Piece /> & PlayerPosition ++
}
        
    }

 
    



    render () {
        console.log()
        return (
            <div>
                <div className="TileBoard">

                    <Grid
                        width={60}
                        gap={2}
                    >
                    {this.CurrentBoard()}
                    </Grid>
                </div>
                <button onClick={this.updateCurrentPlayerPosition}>Moove</button>
            </div>


        );
    }
}

export default BoardMaster;