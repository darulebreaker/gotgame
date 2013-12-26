/**
 * Created by darulebreaker on 12/24/13.
 */
var Cards = require("./../game/Cards");
var Effects = require("./../game/Effects")

// DECK IMPLEMENTATION

function Deck() {
	this.myCards = new Array();
}
Deck.prototype.top = function() {
	return this.myCards[0];
}
Deck.prototype.popAndPushToBottom = function() {
	top = this.myCards.shift();
	this.myCards.push(top);
	return top;
}
Deck.prototype.shuffle = function() {
	var i = deck.length, j, tempi, tempi;
	if (i === 0)
		return false;
	while (--i) {
		j = Math.floor(Math.random() * (i + 1));
		tempi = deck[i];
		tempj = deck[j];
		deck[i] = tempj;
		deck[j] = tempi;
	}
	return deck;
}

// END DECK

function WesterosDeckOne() {
	// add a list of cards
}

function WesterosDeckTwo() {
	// add a list of cards
}

function WesterosDeckThree() {
	// add a list of cards
}

function WildlingsDeck() {
	// add a list of cards
}

function PostBattleCards() {
	// add a list of cards
}

exports.createWesteroDeck = createWesteroDeck;
exports.shuffleDeck = shuffleDeck;
exports.draw = draw;
exports.drawOne = drawOne;
