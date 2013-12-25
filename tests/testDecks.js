/**
 * Created by darulebreaker on 12/24/13.
 */

var Deck = require("./../game/Decks");

var westeroDeck3= Deck.createWesteroDeck();
console.log('-------------------new deck ----------------------------');
console.log(westeroDeck3);
console.log('-------------------shuffled deck ----------------------------');
var shuffled=Deck.shuffleDeck(westeroDeck3)
console.log(shuffled);
console.log('-------------------draw one card from deck ----------------------------');
console.log(Deck.drawOne(westeroDeck3));
