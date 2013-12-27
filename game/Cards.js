/**
 * Created by darulebreaker on 12/24/13.
 */
// list of cards/decks
//  1. wildling
//  2. westeros deck I,II,III
//  3. House cards, 1,2,3,4,5,6 for each house
//  4. battle cards

// Cards -> Westeros Cards
// Cards -> House Cards -> Battle Damage, 
// 

function Card(name, description, image) {
	this.name=name;
//	dont think we need these..... we can add it later in html templating and css.
	this.description=description;
	this.image=image;
}
Card.prototype.getName=function() {
	return this.name;
}
Card.prototype.getDescription=function() {
	return this.description;
}
Card.prototype.getImage=function() {
	return this.image;
}

function WildlingCards(name, description, image){
    this.name=name;
    this.description=description;
    this.image=image;
    this.victoryEffect = new Array(); //lowest bidder, highest bidder, every1 else
    this.defeatEffect = new Array(); //lowest bidder, highest bidder, every1 else
}
WildlingCards.prototype=new Card;
WildlingCards.prototype.constructor=WildlingCards;


function WesterosCards(name, deckNumber, description, image, wildlingPoints){
    this.wildlingPoints = wildlingPoints;
//    if(effect instanceof Effect) {
//    	this.effect = effect;
//    }
    this.addWildlingFlag = function(){
        this.wildingFlag=true;
    }
    this.removeWildlingFlag = function(){
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



exports.WildlingCards= WildlingCards;
exports.WesterosCards= WesterosCards;
exports.HouseCards = HouseCards;
exports.BattleCards = BattleCards;


