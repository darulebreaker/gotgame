/**
 * Created by darulebreaker on 12/30/13.
 */
var events = require('events'),
    eventEmitter = new events.EventEmitter(),
    Area= require('./Area'),
    Decks= require('./Decks'),
    Effects= require('./Effects'),
    Factions = require('./Faction'),
    Player= require ('./Player'),
    Resource = require('./Resource'),
    Token = require('./Token'),
    Tracks = require('./Tracks');

//initialization


//then every round is similar
// increase round # (assuming no one is victorious)
eventEmitter.on('newTurn', function (){


});

// draw cards from westerosDeck 1
//
eventEmitter.on('drawCardDeck1', function(){

});
// draw cards from westerosDeck 2
//
eventEmitter.on('drawCardDeck2', function(){

});
// // draw cards from westerosDeck 3
//
eventEmitter.on('drawCardDeck3', function(){

});

// move wildingly track
//
eventEmitter.on('wildling', function(){

});

// player places order tokens
eventEmitter.on('placeOrderTokens', function(){

});

// trigger raid orders

eventEmitter.on('tokenEvents-Raid', function(){

});
// trigger other non-consolidation tokens

eventEmitter.on('tokenEvents-Majority', function(){

});
// trigger consolidation tokens
eventEmitter.on('tokenEvents-Consolidation', function(){

});

//check for victory
eventEmitter.on('checkVictory', function(){


});


//conditional, supply related
eventEmitter.on('supplyEvent', function(){


});
//conditional, mustering related
eventEmitter.on('musteringEvent', function(){


});
//conditional, bid for dominance orders
eventEmitter.on('biddingEvent', function(){


});

//conditional, wildingly attacks
eventEmitter.on('wildlingEvent', function(){


});