import React, { Component } from 'react';

class SummonerGame extends Component {
  render() {
    const summonerName = this.props.match.params.name;
    const region = this.props.match.params.region;
    return (
      <div>SummonerGame: {summonerName} (region: {region})</div>
    );
  }
}

export default SummonerGame;
