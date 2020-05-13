import React from "react";

import Checkbox from "./Checkbox";
import PlayButton from "./PlayButton";

import './Style/SelectPlayers.css'


class SelectPlayers extends React.Component {
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

  // lors du clic sur une checkbox, on met à jour la key players.selected du joueur selectionné et
  // on déclenche l'update de l'array players avec cette nouvelle valeur
  handleCheckboxChange = (event, index) => {
    let updatedPlayers = this.state.players.map((player, i) => {
      return {
        id: player.id,
        selected: i === index ? !player.selected : player.selected
      };
    });
    this.setState({ players: updatedPlayers });
  };

  // on recherche si au moins une key players.selected est à true
  isButtonactive = () => {
    let isOnePlayerselected = this.state.players.some(player => {
      return player.selected;
    });
    return isOnePlayerselected;
  };

  // Array à envoyer à Game ou à stocker dans localStorage
  // .map contenant les données des joueurs sélectionnés seulement
  // le format de l'objet joueur est géré dans le component joueur
  // playersOnGame = () => { }




  render() {
    const { players } = this.state;
    return (
      <div>
      <div className = "CharactersContainer">

        <div className = "CharacterCard">
          <div className = "Character">ALAN</div>
          <Checkbox
          id="player1"
          name="Alan"
          checked={players[0].selected}
          handleCheckboxChange={e => this.handleCheckboxChange(e, 0)}
          />
        </div>

        <div className = "CharacterCard">
          <div className = "Character">JUDY</div>
          <Checkbox
          id="player2"
          name="Judy"
          checked={players[1].selected}
          handleCheckboxChange={e => this.handleCheckboxChange(e, 1)}
          />

        </div>

        <div className = "CharacterCard">
          <div className = "Character">SARAH</div>
          <Checkbox
          id="player3"
          name="Sarah"
          checked={players[2].selected}
          handleCheckboxChange={e => this.handleCheckboxChange(e, 2)}
          />

        </div>

        <div className = "CharacterCard">
          <div className = "Character">PETER</div>
          <Checkbox
          id="player4"
          name="Sarah"
          checked={players[3].selected}
          handleCheckboxChange={e => this.handleCheckboxChange(e, 3)}
          />
        </div>

      </div>
        <PlayButton active={this.isButtonactive()}/>
      </div>
    );
  }
}

export default SelectPlayers;
