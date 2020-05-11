import React from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: "player1",
          selected: false
        },
        {
          id: "player2",
          selected: false
        },
        {
          id: "player3",
          selected: false
        },
        {
          id: "player4",
          selected: false
        }
      ]
    };
  }

  handleCheckboxChange = (event, index) => {
    let updatedPlayers = this.state.players.map((player, i) => {
      return {
        id: player.id,
        selected: i === index ? !player.selected : player.selected
      };
    });
    this.setState({ players: updatedPlayers });
  };

  isButtonactive = () => {
    // on cherche à renvoyer un true (on peut jouer) ou un false (on doit sélectionner un joueur)
    // si au moins un joueur est sélectionné (selected:true) alors on doit renvoyer true
    // on utilise .some pour parcourir le tableau : dès que .some trouve une occurrence true
    // il s'arrête de chercher et renvoie la valeur true
    // et hop, le bouton est actif si un joueur est actif

    let isOnePlayerselected = this.state.players.some(player => {
      return player.selected;
    });
    return isOnePlayerselected;
  };

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <Checkbox
          id="player1"
          name="selected"
          checked={players[0].selected}
          handleCheckboxChange={e => this.handleCheckboxChange(e, 0)}
        />
        <Checkbox
          id="player2"
          name="selected"
          checked={players[1].selected}
          handleCheckboxChange={e => this.handleCheckboxChange(e, 1)}
        />
        <Checkbox
          id="player3"
          name="selected"
          checked={players[2].selected}
          handleCheckboxChange={e => this.handleCheckboxChange(e, 2)}
        />
        <Checkbox
          id="player4"
          name="selected"
          checked={players[3].selected}
          handleCheckboxChange={e => this.handleCheckboxChange(e, 3)}
        />

        <Button active={this.isButtonactive()} />
      </div>
    );
  }
}

export default App;