/**
 * Created by darulebreaker on 12/24/13.
 */
var Cards = require("./../game/Cards");

myWildingAttackCard = new Cards.WildlingCards("Rattleshirt's raiders", "blah","placeholder");
//todo real description and real effects
console.log(myWildingAttackCard);

myWesteroCard = new Cards.WesterosCards("Web of Lies", "Support Orders Cannot be played during the planning phase","placeholder", "blah.png", 0);
myWesteroCard.addWildlingFlag();

console.log(myWesteroCard);