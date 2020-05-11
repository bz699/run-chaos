import React, { Component } from "react";

class Button extends Component {
  render() {
    let { active } = this.props;

    return (
      <button
        className={active ? "button-on" : "button-off"}
        // !!!!! onClick={this.props.handleButtonClick} Penser à passer handleButtonClick props au bouton "jouer"
        type="button"
        disabled={!active}
      >
        {active ? "jouer" : "select a player"}
      </button>
    );
  }
}

export default Button;
