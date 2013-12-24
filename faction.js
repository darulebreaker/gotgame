/**
 * Created by darulebreaker on 12/24/13.
 */
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
    remaining.splice(random,0);
    //console.log(assignment);
}

exports.assign= assign;
exports.assignment= assignment;
//assign('bob');