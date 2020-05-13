import React from 'react';

import './Style/Piece.css';

function Piece (props) {
    const { player, number } = props
   let choosePieceClass = "PlayerPiece"+player
   let choosePathClass = "PathPlayer"+player
    
    

        return (
            <div className = "PathPlayer1">
                <div className="PlayerPiece1">{number}</div>
            </div>
            // on affiche le css si position === positions de players
        )

}

export default Piece;
