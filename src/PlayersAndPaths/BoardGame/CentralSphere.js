import React from 'react';
import './Style/CentralSphere.css'

function CentralSphere(props) {
const currentPlayer = props.playerTurn

    return (
        
        <div className="CentralSphere">
            <button className={ props.enigmaOn ? "button-on" : "button-off"}
            disabled = { !props.enigmaOn }>{ props.enigmaOn ? "ENIGMA" : currentPlayer }</button>    
        </div>

    )

}


export default CentralSphere;