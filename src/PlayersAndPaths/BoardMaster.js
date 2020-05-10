import React from 'react';
import Grid from 'react-css-grid';

import Tile from './Tile'

import './Style/BoardMaster.css';





class BoardMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    createBoard = () => {
        let tileArray = []
        for (let counter = 0; counter < 16; counter ++ ) {
            tileArray.push(counter)
        }
        return this.occupyTiles(tileArray)

    }

    occupyTiles = (tileArray) => {
        return tileArray.map(number => (
            <Tile number={number} />
        ))
    }


    render () {
        
        return (

            <div className="TileBoard">

                <Grid
                    width={60}
                    gap={2}
                >
                {this.createBoard()}
                </Grid>
            </div>


        );
    }
}

export default BoardMaster;