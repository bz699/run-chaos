import React from 'react';
import './Style/CentralSphere.css'

function CentralSphere(props) {
const { diceRolled, enigmaOn, currentPlayer, handleDiceRolled } = props

    return (
        
        <div className="CentralSphere">
            
            <button
                className=
                    { enigmaOn
                        ? "button-on"
                        : "button-off"}
                onClick={handleDiceRolled}>
                    { diceRolled
                    ? "" // link to enigma
                    : "Roll Dices" }
            </button>

{/*             <button className=
                { enigmaOn ? "button-on" : "button-off"}
                    disabled = { !enigmaOn }>
                    { enigmaOn
                        ? "ENIGMA"
                        : "lancez les dés"}</button>    */}



        </div>

    )

}


export default CentralSphere;