/**
 * Created by darulebreaker on 12/26/13.
 */
var Area = require('./../game/Area');
var Resource = require('./../game/Resource');
var list = {
    1: "Bay of Ice",
    2: "Castle black",
    3: "The shivering sea",
    4: "Winterfell",
    5: "Karhold",
    6: "The Stony Shore",
    7: "White Harbor"
}

area1= new Area.Area("Bay of Ice", 1,1, "placeholder", [2, 4, 6], []);
area2= new Area.Area("Castle Black", 2, 0, "placeholder",[1, 4, 5], Resource.list[1]);

console.log(area1);
console.log(area2);

Area.move(14,13,[1]);

console.log(listArea[14]);
console.log(listArea[13]);