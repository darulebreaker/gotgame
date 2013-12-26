/**
 * Created by darulebreaker on 12/24/13.
 */
var Cards = require("./../game/Cards");

// DECK IMPLEMENTATION

var Deck = function() {
	this.myCards = new Array();
};
Deck.prototype.top = function() {
	return this.myCards[0];
};
Deck.prototype.popAndPushToBottom = function() {
	top = this.myCards.shift();
	this.myCards.push(top);
	return top;
};
Deck.prototype.shuffle = function() {
	var i = this.myCards.length, j, tempi, tempi;
	if (i === 0)
		return false;
	while (--i) {
		j = Math.floor(Math.random() * (i + 1));
		tempi = this.myCards[i];
		tempj = this.myCards[j];
		this.myCards[i] = tempj;
		this.myCards[j] = tempi;
	}
    return true;
};
Deck.prototype.push = function(card) {
        this.myCards.push(card);
};

// END DECK

function createWesterosDeckOne() {
	// add a list of cards
}

function createWesterosDeckTwo() {
	// add a list of cards
}

function createWesterosDeckThree() {
    myCards = new Deck();
    myCards.push(new Cards.WesterosCards(1,"bullshit","bullshit","bullshit.png",0));
    myCards.push(new Cards.WesterosCards(2,"bullshit2","bullshit2","bullshit2.png",0));
    return myCards;
}

function createWildlingsDeck() {
	// add a list of cards
}

function createPostBattleDeck() {
	// add a list of cards
}

function createHouseBattleDeck(house) {
    // add a list of cards
}
exports.createWesterosDeckOne = createWesterosDeckOne;
exports.createWesterosDeckTwo = createWesterosDeckTwo;
exports.createWesterosDeckThree = createWesterosDeckThree;
exports.createWildlingsDeck = createWildlingsDeck;
exports.createPostBattleDeck = createPostBattleDeck;
exports.createHouseBattleDeck = createHouseBattleDeck;