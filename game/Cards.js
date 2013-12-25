/**
 * Created by darulebreaker on 12/24/13.
 */
// list of cards/decks
//  1. wildling
//  2. westeros deck I,II,III
//  3. House cards, 1,2,3,4,5,6 for each house
//  4. battle cards

function WildingCards(name, description, image){
    this.name=name;
    this.description=description;
    this.image=image;
    this.victoryEffect = new Array(); //lowest bidder, highest bidder, every1 else
    this.defeatEffect = new Array(); //lowest bidder, highest bidder, every1 else
}

function WesteroCards(name, deckNumber, description, image){
    this.name=name;
    this.description=description;
    this.image=image;
    this.deckNumber = deckNumber;
    this.wildingFlag = false;
    this.effect = new Array(); //lowest bidder, highest bidder, every1 else

    this.addWildingFlag = function(){
        this.wildingFlag=true;
    }
    this.removeWildingFlag = function(){
        this.wildingFlag=false;
    }
}

function HouseCards( name, faction, description, image, points){
    this.name=name;
    this.description=description;
    this.image=image;
    this.faction = faction;
    this.points= points;
    this.effect = new Array();
}

function BattleCards( image){
    this.image = image;
    this.effects = new Array();
}



exports.WildingCards= WildingCards;
exports.WesteroCards= WesteroCards;
exports.HouseCards = HouseCards;
exports.BattleCards = BattleCards;


