import React from 'react';
import './Style/Tile.css';


class Tile extends React.Component {
  
    render() {
      return (
        <div className="Tile">{this.props.number}
        </div>
      );
    }
  }


  export default Tile;