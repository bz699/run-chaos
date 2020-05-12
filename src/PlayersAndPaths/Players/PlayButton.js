import React, { Component } from "react";
import { Link } from 'react-router-dom';


class PlayButton extends Component {



  render() {
    let { active } = this.props;

    return (
      <button
        className={active ? "button-on" : "button-off"}
        // !!!!! onClick={this.props.handleButtonClick} Penser à passer
        //handleButtonClick props au bouton "jouer"
        // onClick=(() => handleClick())
        
        type="button"
        disabled={!active}
      >
        {active ? <Link to='/Game'>jouer</Link> : "select a player"}
      </button>

    );
  }
}

export default PlayButton;
