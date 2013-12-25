/**
 * Created by darulebreaker on 12/23/13.
 */
var app = require('http').createServer(handler)
var io = require('socket.io').listen(app)
, fs = require('fs'),
 Faction = require('./game/Factions');
Deck= require('./game/Decks');

app.listen(8080);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

// usernames which are currently connected to the chat
var usernames = {};

io.sockets.on('connection', function (socket) {

    // when the client emits 'sendchat', this listens and executes
    socket.on('sendchat', function (data) {
        // we tell the client to execute 'updatechat' with 2 parameters
        io.sockets.emit('updatechat', socket.username, data);
    });

    // when the client emits 'adduser', this listens and executes
    socket.on('adduser', function(username){
        // we store the username in the socket session for this client
        Faction.assign(username);
        username=  username + ":"+Faction.assignment[username];
        socket.username = username;
        // add the client's username to the global list
        usernames[username] = username;
        // echo to client they've connected
        socket.emit('updatechat', 'SERVER', 'you have connected');
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected');
        // update the list of users in chat, client-side
        io.sockets.emit('updateusers', usernames);
    });

    socket.on('drawCard',function(username){
        var westeroDeck3= Deck.createWesteroDeck();
       // console.log('-------------------new deck ----------------------------');
        //console.log(westeroDeck3);
        //console.log('-------------------shuffled deck ----------------------------');
        var shuffled=Deck.shuffleDeck(westeroDeck3)
        //console.log(shuffled);
        //console.log(Deck.drawOne(westeroDeck3));
       //var card = Deck.drawOne(westeroDeck3);
        //console.log('draws card:' +card);

       socket.emit('updatechat', 'SERVER', 'card was drawn:'+ JSON.stringify(Deck.drawOne(westeroDeck3)));
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', function(){
        // remove the username from globalDeck.drawOne(westeroDeck3) usernames list
        delete usernames[socket.username];
        // update list of users in chat, client-side
        io.sockets.emit('updateusers', usernames);
        // echo globally that this client has left
        socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
    });
});