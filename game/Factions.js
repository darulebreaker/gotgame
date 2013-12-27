/**
 * Created by darulebreaker on 12/24/13.
 */
var Area= require("./Area"),
    Decks= require("./Decks"),
    Tokens=require("./Tokens");

var factions = new Array("Stark", "Lannister", "Greyjoy","Baratheon", "Tyrell", "Martell");

var assignment=new Array();
var remaining= new Array();

function assign(name){
    if(assignment.length==0 && remaining.length==0)
        remaining=factions;
    else if(remaining.length==0){
        console.log('player # exceeds faction, makes player into observer')
        return;
    }
    var random= Math.round(Math.random()*(remaining.length-1));
    assignment[name]= remaining.slice(random,random+1);
    remaining.splice(random,1);
    //console.log(assignment);
}

function Faction(name){
    this.name=name;
    this.initialTerritories;
    this.houseCards;
    this.initialPowerToken;
    this.initialOrderToken;
    this.initialDominanceToken;
    this.initialVictoryTrack;
    this.initialSupplyTrack;
    this.CombatUnit;
}

var Stark = new Faction('Stark');
Stark.initialTerritories= new Area.Area('Winterfell',14,0,'placeholder',[1,13,15,16,17,21],['castle','supply','consolidation']);
Stark.initialPowerToken = new Tokens.PowerToken('Stark','placeholder');




exports.assign= assign;
exports.assignment= assignment;
//assign('bob');