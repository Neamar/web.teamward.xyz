import React, { Component } from 'react';
import Player from '../Player/Player';

class Team extends Component {
  render() {
    return (
      <div>
        {this.props.team.players.map((player) => <Player key={player.summoner.id} player={player} />)}
      </div>
    );
  }
}

export default Team;
