/**
 * Created by darulebreaker on 12/25/13.
 */

var list= {
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
    13:'',
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



function Area(name, id, type, image, neighbors, resources ){
    Area.type= {
        0: 'land',
        1: 'sea'
    };
    this.name=name;
    this.id=id     //every territory is assigned an id
    this.type= Area.type[type]; //land or seaSSS
    this.neighbors = neighbors;
    this.resources = resources;

}

exports.Area= Area;