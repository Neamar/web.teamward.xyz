import React, { Component } from 'react';

class Home extends Component {
  addSummoner = (e) => {
    e.preventDefault();
    console.log('THE SUMMONER IS', this.summonerNameEl.value, this.summonerRegionEl.value);
  }

  render() {
    return (
      <div>
        <div>Home</div>
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

export default Home;
