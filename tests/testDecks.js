/**
 * Created by darulebreaker on 12/24/13.
 */

var Deck = require("./../game/Decks");

var westerosDeck3= Deck.createWesterosDeckThree();
console.log('-------------------new deck ----------------------------');
console.log(westerosDeck3);
console.log('-------------------shuffled deck ----------------------------');
westerosDeck3.shuffle();
console.log("shuffled");
console.log('-------------------draw one card from deck ----------------------------');
//console.log(Deck.drawOne(westeroDeck3));
