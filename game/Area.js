/**
 * Created by darulebreaker on 12/25/13.
 */
var Resources= require('./Resource'),
    _ = require('underscore');

var listName= {
    1: 'Bay of Ice',
    2: 'The Shivering Sea',
    3: '',
    4:'',
    3: '',
    5:'',
    6: '',
    7:'',
    8: '',
    9:'',
    10: '',
    11:'',
    12: '',
    13:'Castle Black',
    14:'Winterfell',
    15: '',
    16:'',
    17: '',
    18:'',
    19: '',
    20:'',
    21:'',
    22:'',
    23:'',
    24:'',
    25:'',
    26:'',
    27:'',
    28:'',
    29:'',
    30:'',
    31:'',
    32:'',
    33:'',
    34:'',
    35:'',
    36:'',
    37:'',
    38:'',
    39:'',
    40:'',
    41:'',
    42:'',
    43:'',
    44:'',
    45:'',
    46:'',
    47:'',
    48:'',
    49:''
};



function Area(name, id, type, image, neighbors, resources ,combatUnits){
    Area.type= {
        0: 'land',
        1: 'sea'
    };
    this.name=name;
    this.id=id     //every territory is assigned an id
    this.type= Area.type[type]; //land or seaSSS
    this.neighbors = neighbors;
    this.resources = resources;
    this.combatUnits=combatUnits;
    this.owner='';

}


listArea = {
    13: new Area(listName[13],13,0,'placeholder',[1,2,14,15],['consolidation'],[]),
    14: new Area(listName[14],14,0,'placeholder',[1,13,15,16,17,21],['castle','supply','consolidation'],[1,2])
}


var move= function(originId,destinationId, combatUnits){
    //check to see if origin exists
    if(listArea[originId]){
        //check to see if destination is connected to destination
        if(listArea[originId].neighbors.indexOf(destinationId) >-1) {
            //check to see if the combatUnits exists
            if((_.intersection(listArea[originId].combatUnits,combatUnits)).length == combatUnits.length) {
                console.log("move!");
                //assuming no combat, no neutral
                listArea[originId].combatUnits =_.difference(listArea[originId].combatUnits, combatUnits);
                listArea[destinationId].combatUnits=combatUnits;
            }
        }
    }


    //move them, decide if combat is needed, if owner shall be changed

}




exports.Area= Area;
exports.move=move;
exports.listArea= listArea;