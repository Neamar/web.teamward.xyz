import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGame } from '../../reducers/gameData/actions';

class SummonerGame extends Component {
  componentDidMount() {
    this.fetchGameIfNecessary();
  }

  componentWillReceiveProps(nextProps) {
    this.fetchGameIfNecessary(nextProps);
  }

  fetchGameIfNecessary(props = this.props) {
    if (props.loading || props.game) {
      return;
    }
    const summoner = {
      name: props.match.params.name,
      region: props.match.params.region,
    };
    this.props.fetchGame(summoner);
  }

  render() {
    const summonerName = this.props.match.params.name;
    const region = this.props.match.params.region;
    return (
      <div>
        SummonerGame: {summonerName} (region: {region})
        <p>
          Loading: {this.props.loading ? 'YES' : 'NO'}
        </p>
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.gameData.loading,
  game: state.gameData.game,
}), {
  fetchGame,
})(SummonerGame);
