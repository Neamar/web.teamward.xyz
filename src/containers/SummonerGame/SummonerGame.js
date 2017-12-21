import React, { Component } from 'react';

class SummonerGame extends Component {
  render() {
    const summonerName = this.props.match.params.name;
    return (
      <div>SummonerGame: {summonerName}</div>
    );
  }
}

export default SummonerGame;