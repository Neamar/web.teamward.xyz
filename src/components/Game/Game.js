import React, { Component } from 'react';
import GameHeader from '../GameHeader/GameHeader';
import Team from '../Team/Team';

class Game extends Component {
  render() {
    return (
      <div>
        <GameHeader game={this.props.game} />
        <div>
          {this.props.game.teams.map((team) => <Team key={team.team_id} team={team} />)}
        </div>
      </div>
    );
  }
}

export default Game;
