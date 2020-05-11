import React, { Component } from "react";

class Checkbox extends Component {

  render() {
    return (
      <input
        type="checkbox"
        onChange={this.props.handleCheckboxChange}
        checked={this.props.selected}
      />
    );
  }
}

export default Checkbox;
