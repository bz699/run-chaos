import React from 'react';
import './Style/Path.css';

function Path (props) {
    const { playerTurn, number } = props
    let choosePathClass = "PathPlayer"+playerTurn
    
    

        return (
            <div className={choosePathClass}>{number}</div>
        )
    }

export default Path;
