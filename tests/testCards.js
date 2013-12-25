/**
 * Created by darulebreaker on 12/24/13.
 */
var Cards = require("./../game/Cards");

myWildingAttackCard = new Cards.WildingCards("Rattleshirt's raiders", "blah","placeholder");
//todo real description and real effects
console.log(myWildingAttackCard);

myWesteroCard = new Cards.WesteroCards("Web of Lies", 3, "Support Orders Cannot be played during the planning phase","placeholder");
myWesteroCard.addWildingFlag();

console.log(myWesteroCard);