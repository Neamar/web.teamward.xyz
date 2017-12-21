import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { addAccount } from '../../reducers/accounts/actions';
import styles from './Home.css';

class Home extends Component {
  addSummoner = (e) => {
    e.preventDefault();
    const summoner = {
      region: this.summonerRegionEl.value,
      name: this.summonerNameEl.value,
    };
    this.props.addAccount(summoner);
    this.goToSummonerGame(summoner);
  }

  goToSummonerGame = (summoner) => {
    this.props.push(`${summoner.region}/game/${summoner.name}`);
  }

  render() {
    return (
      <div>
        <div>
          <h3>Saved accounts</h3>
          {this.props.accounts.map((account) => (
            <p
              key={account.name}
              onClick={() => this.goToSummonerGame(account)}
              className={styles.savedAccount}
            >
              {account.name} - {account.region}
            </p>
          ))}
        </div>

        <form onSubmit={this.addSummoner}>
          <h4>View your stats</h4>
          <input type="text" name="summoner" required placeholder="Your summoner name" ref={(el) => { this.summonerNameEl = el; }} />
          <select name="region" style={{ display: 'block' }} defaultValue="euw" ref={(el) => { this.summonerRegionEl = el; }}>
            <option value="br">BR</option>
            <option value="eune">EUNE</option>
            <option value="euw">EUW</option>
            <option value="kr">KR</option>
            <option value="lan">LAN</option>
            <option value="las">LAS</option>
            <option value="na">NA</option>
            <option value="oce">OCE</option>
            <option value="tr">TR</option>
            <option value="ru">RU</option>
            <option value="jp">JP</option>
          </select>
          <p>
            <input type="submit" value="View stats!" />
          </p>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({
  accounts: state.accounts.accounts,
}), {
  push,
  addAccount,
})(Home);
