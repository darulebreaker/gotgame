/**
 * Created by darulebreaker on 12/24/13.
 */
// List of tokens
// 1. neutral force
// 2. garrison token
// 3. order token
// 4. power token
// 5. dominance token

function NeutralForce( name, numPlayers,image, defPoint){
    this.name=name;
    this.numPlayers = numPlayers;
    this.image = image;
    this.defPoint=defPoint;
}

function Garrison(name, image, defPoint){
    this.name=name;
    this.image= image;
    this.defPoint=defPoint;
}

function OrderToken(type , image, point ){
    OrderToken.types={
       0: "raid",
       1: "march",
       2: "defend",
       3: "support",
       4: "consolidate"
    }
    this.type= OrderToken.types(type);
    this.image= image;
    this.point= point;
}

function PowerToken(faction, image){
    PowerToken.max=20;
    this.inHand=5;
    this.pool = PowerToken.max- this.inhand;
    this.faction= faction;
    this.image = image;

    this.take = function (num){
        this.inHand += num;
        this.pool = PowerToken.max - this.inHand;
        if(this.inHand> PowerToken.max) {
            this.inHand=PowerToken.max;
            this.pool=0;
        }
    }
    this.drop=function (num){
        this.pool += num;
        this.inHand = PowerToken.max - this.pool;
        if(this.pool> PowerToken.max) {
            this.pool=PowerToken.max;
            this.inHand=0;
        }
    }
}

function DominanceToken(name, image){
      this.name=name;
      this.image= image;
      this.effects = new Array();
      this.owner;
}

exports.NeutralForce= NeutralForce;
exports.Garrion = Garrison;
exports.PowerToken = PowerToken;
exports.OrderTokens = OrderToken;
exports.DominanceTokens = DominanceToken;
