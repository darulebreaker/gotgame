/**
 * Created by darulebreaker on 12/24/13.
 */
//List of tracks
// 1. Wildling
// 2. round track
// 3. victory track
// 4. supply track
// 5. influence tracks --throne, sword, raven

function WildlingTrack(){
    WildlingTrack.max=10;
    WildlingTrack.start=0;
    WildlingTrack.current=WildlingTrack.start;


    WildlingTrack.advance= function( num){
        WildlingTrack.current+= num;
        if(WildlingTrack.current> WildlingTrack.max){
            WildlingTrack.current=WildlingTrack.max;
        }
    }

    WildlingTrack.retreat = function(num){
        WildlingTrack.current-=num;
        if(WildlingTrack.current< WildlingTrack.start){
            WildlingTrack.current=WildlingTrack.start;
        }
    }
    WildlingTrack.reset = function(){
        WildlingTrack.current=WildlingTrack.start;
    }

}

function RoundTrack() {
    RoundTrack.max=10;
    RoundTrack.start=0;
    RoundTrack.current=WildlingTrack.start;

    RoundTrack.advance = function() {
        RoundTrack.current++;
        if(RoundTrack.current> RoundTrack.max){
            RoundTrack.current=RoundTrack.max;
        }
    }
}

function VictoryTrack(current,faction){
    VictoryTrack.max=7;
    this.current=current;
    this.faction = faction;
    this.advance= function( num){
        this.current+= num;
        if(current.current> VictoryTrack.max){
            this.current=VictoryTrack.max;
        }
    }

   this.retreat = function(num){
       this.current-=num;
        if(this.current< VictoryTrack.start){
            this.current=VictoryTrack.start;
        }
    }
}

//todo supply track
//todo influence tracks

exports.WildlingTrack= WildlingTrack;
exports.RoundTrack= RoundTrack;
exports.VictoryTrack= VictoryTrack;

