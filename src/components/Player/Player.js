import React, { Component } from 'react';
import mastery7 from './images/champion_mastery_7.png'

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
        <img src={mastery7} alt={"Champion mastery level " + player.champion.mastery} />
        { player.current_season_rank.tier && <img src={"images/tier_" + player.current_season_rank.tier.toLowerCase()} alt={player.current_season_rank.tier} />}

      </div>
    );
  }
}

export default Player;
