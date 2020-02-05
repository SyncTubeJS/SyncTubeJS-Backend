var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3000);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// TODO: CREATE ROOM

//  -- TODO: CREATE SOCKET THAT ACCEPTS A YOUTUBE URL

//  -- TODO: CREATE A SOCKET THAT EMITS ABOVE YOUTUBE URL TO PEERS IN THE NAMESPACE/LOBBY

// -- TODO: CREATE A SOCKET THAT SYNCS TIME UP WHEN THE HOST SKIPS AROUND IN A VIDEO