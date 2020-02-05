var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(1339);
console.log("Server Started.");

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