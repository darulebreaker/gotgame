/**
 * Created by darulebreaker on 12/24/13.
 */
//at any point in the game, at least one player should have the following
// name
// faction
// territories
// house cards
// order token
// power token
// dominance token
// position on victory track
// position on supply track
// position on dominance tracks
// combat units--> it's associated to land only

function Player(name, faction){
    this.name=name;
    this.faction = faction.name;
    this.territories = faction.initialTerritories;
    this.houseCards = faction.houseCards;
    this.powerToken = faction.initialPowerToken;
    this.orderToken = faction.initialOrderToken;
    this.dominanceToken = faction.initialDominanceToken;
    this.victoryTrack = faction.initialVictoryTrack;
    this.supplyTrack = faction.initialSupplyTrack;


}

exports.Player= Player;
