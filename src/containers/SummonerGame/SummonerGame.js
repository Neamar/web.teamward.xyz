import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGame } from '../../reducers/gameData/actions';
import Game from '../../components/Game/Game';

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
        {this.props.game && <Game game={this.props.game} />}
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
