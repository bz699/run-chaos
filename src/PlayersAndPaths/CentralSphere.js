import React from 'react';
import './Style/CentralSphere.css'

function CentralSphere(props) {


    return (
        
        <div className="CentralSphere">
            <button className={ props.enigmaOn ? "button-on" : "button-off"}
            disabled = { !props.enigmaOn }>{ props.enigmaOn ? "ENIGMA" : "" }</button>    
        </div>

    )

}


export default CentralSphere;