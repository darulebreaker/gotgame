/**
 * Created by darulebreaker on 12/25/13.
 */
var Tokens=require("./../game/Tokens");

myNeutralToken = new Tokens.NeutralForce("starfall", new Array(4,5),"placeholder",3);
myNeutralToken2 = new Tokens.NeutralForce("starfall",3,"placeholder",100);

console.log(myNeutralToken);
console.log(myNeutralToken2);

myGarrisonToken = new Tokens.Garrion("Lannisport", "placeholder", 2);
console.log(myGarrisonToken);

myOrderToken = new Tokens.OrderTokens(1,'placeholder',1, true);
console.log(myOrderToken);

myPowerToken = new Tokens.PowerToken("Lannister", "placeholder");
myPowerToken.take(5);
myPowerToken.drop(2);
console.log(myPowerToken);

myDominanceToken = new Tokens.DominanceTokens("throne", "placeholder");
console.log(myDominanceToken);