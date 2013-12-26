/**
 * Created by darulebreaker on 12/25/13.
 */
Tracks=require('./../game/Tracks');

var wildingTrack= new Tracks.WildlingTrack();
Tracks.WildlingTrack.advance(12);
Tracks.WildlingTrack.retreat(1);
console.log(Tracks.WildlingTrack.current);
Tracks.WildlingTrack.reset();
console.log(Tracks.WildlingTrack.current);

var roundTrack = new Tracks.RoundTrack();
Tracks.RoundTrack.advance();
console.log(Tracks.RoundTrack.current);

var victoryTrackL = new Tracks.VictoryTrack(3, 'Lannister');
victoryTrackL.advance(2);
victoryTrackL.retreat(3);
console.log(victoryTrackL);
