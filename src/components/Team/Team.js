import React, { Component } from 'react';
import Player from '../Player/Player';

class Team extends Component {
  render() {
    return (
      <div style={{border:"1px solid blue", margin:"20px", width: "700px", "float": "left"}}>
        {this.props.team.players.map((player) => <Player key={player.summoner.id} player={player} />)}
      </div>
    );
  }
}

export default Team;
