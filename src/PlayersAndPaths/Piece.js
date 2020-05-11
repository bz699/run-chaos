import React from 'react';

import './Style/Piece.css';

class Piece extends React.Component {

    
    

    render () {
        return (
            <div className = "Path">
                <div className="Player1Piece">{this.props.number}</div>
            </div>
            
        )
    }
}

export default Piece;
