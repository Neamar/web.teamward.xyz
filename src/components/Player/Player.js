import React, { Component } from 'react';

import tierBronze from './images/tier_bronze.png'
import tierSilver from './images/tier_silver.png'
import tierGold from './images/tier_gold.png'
import tierPlatinum from './images/tier_platinum.png'
import tierDiamond from './images/tier_diamond.png'
import tierMaster from './images/tier_master.png'
import tierChallenger from './images/tier_challenger.png'

import mastery1Image from './images/champion_mastery_1.png'
import mastery2Image from './images/champion_mastery_2.png'
import mastery3Image from './images/champion_mastery_3.png'
import mastery4Image from './images/champion_mastery_4.png'
import mastery5Image from './images/champion_mastery_5.png'
import mastery6Image from './images/champion_mastery_6.png'
import mastery7Image from './images/champion_mastery_7.png'

const tiersImages = {
  BRONZE: tierBronze,
  SILVER: tierSilver,
  GOLD: tierGold,
  PLATINUM: tierPlatinum,
  DIAMOND: tierDiamond,
  MASTER: tierMaster,
  CHALLENGER: tierChallenger
};

const masteriesImages = [undefined, mastery1Image, mastery2Image, mastery3Image, mastery4Image, mastery5Image, mastery6Image, mastery7Image];


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
        { player.champion.mastery > 0 && <img src={masteriesImages[player.champion.mastery]} alt={"Champion mastery level " + player.champion.mastery} />}
        { player.current_season_rank.tier && <img src={tiersImages[player.current_season_rank.tier]} alt={player.current_season_rank.tier} />}

      </div>
    );
  }
}

export default Player;
