/**
 * Created by darulebreaker on 12/24/13.
 */
var Area= require("./Area"),
    Decks= require("./Decks"),
    Tokens=require("./Tokens"),
    Tracks=require("./Tracks");


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
}

var Stark = new Faction('Stark');
Stark.initialTerritories= new Area.Area('Winterfell',14,0,'placeholder',[1,13,15,16,17,21],['castle','supply','consolidation']);
Stark.initialTerritories.combatUnits=[1,2];
Stark.houseCards=[];
Stark.initialPowerToken = new Tokens.PowerToken('Stark','placeholder');
Stark.initialVictoryTrack=new Tracks.VictoryTrack(2,'Stark');
//Stark.initialSupplyTrack=new Tracks.SupplyTrack





exports.assign= assign;
exports.assignment= assignment;
exports.Stark=Stark;
//assign('bob');