/**
 * Created by darulebreaker on 12/24/13.
 */
var Cards = require("./../game/Cards");
function createWesteroDeck(){
    var deck= new Array();
    deck.push(new Cards.WesteroCards("Web of Lies", 3, "Support Orders Cannot be played during the planning phase","placeholder"));
    deck.push(new Cards.WesteroCards("Card 2",3, "blah","placeholder"));
    deck.push(new Cards.WesteroCards("Card 3",3, "blah","placeholder"));
    deck.push(new Cards.WesteroCards("Card 4",3, "blah","placeholder"));
    deck.push(new Cards.WesteroCards("Card 5",3, "blah","placeholder"));
    return deck;
}

function shuffleDeck(deck) {
    var i= deck.length, j, tempi, tempi;
    if(i=== 0) return false;
    while( --i){
        j= Math.floor(Math.random()* (i+1));
        tempi = deck[i];
        tempj = deck[j];
        deck[i] = tempj;
        deck[j]= tempi;
    }
    return deck;
}

function draw(deck, amount){
    var cards = new Array();
    cards = deck.slice(0,amount);
    deck.splice(0, amount); //removes from array
    return cards
}

function drawOne(deck){
   return draw(deck,1);
}

exports.createWesteroDeck= createWesteroDeck;
exports.shuffleDeck= shuffleDeck;
exports.draw=draw;
exports.drawOne=drawOne;
