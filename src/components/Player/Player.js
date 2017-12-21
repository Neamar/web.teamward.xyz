import React, { Component } from 'react';

class Player extends Component {
  render() {
    const player = this.props.player;
    console.log(player);
    return (
      <div style={{border:"1px solid black", margin:"20px"}}>
        <img src={player.champion.image} alt={player.champion.name} />
        <img src={player.spell_d.image} alt={player.spell_d.name} />
        <img src={player.spell_f.image} alt={player.spell_f.name} />
        <span>{player.summoner.name}</span>
        <span>{player.champion.name}</span>
        <span>lvl. {player.summoner.level}</span>
      </div>
    );
  }
}

export default Player;
