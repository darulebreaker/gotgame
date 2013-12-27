/**
 * Created by darulebreaker on 12/24/13.
 */
//collection of effects across the game

var Decks = require("./../game/Decks")

//shuffle cards in this deck
function DeckShuffleEffect(deck) {
	this.deck=deck;
}
DeckShuffleEffect.prototype.apply = function () {
	this.deck.shuffle();
}


// disable individual order token


// disable order token type


exports.DeckShuffleEffect=DeckShuffleEffect;
