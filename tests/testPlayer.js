/**
 * Created by darulebreaker on 12/29/13.
 */
var Player = require('./../game/Player'),
    Factions = require('./../game/Factions');


var player = new Player.Player('bob', Factions.Stark);

console.log(player);
