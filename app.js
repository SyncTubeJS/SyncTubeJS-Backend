var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(1339);
console.log("Server Started.");

io.on('connection', function (socket) {
  socket.emit('console_message', { status: 'Connected! Hello World!' });

  socket.on('test_connect', function (data) {
    console.log(data);
    console.log(socket.id)

    socket.emit('console_message', { status: 'Payload Received Properly.' });
  });


  socket.on('create_room', function(room_name){
    if(room_name.length > 0) {
      socket.join(room_name)
    } else {
      console.log('nope!')
    }
    
    // @joe Should we completely change store with all Rooms instead of pushing just one room at a time? I have both below


    let allRooms = Object.keys(io.sockets.adapter.rooms)
    console.log(allRooms)

    // ONE AT A TIME This runs the Vuex action SOCKET_addRoomAction
    socket.emit('addRoomAction', room_name)

    // COMPLETELY CHANGE STATE
    // socket.emit('changeRoomAction', allRooms)
  })


});

//  -- TODO: CREATE SOCKET THAT ACCEPTS A YOUTUBE URL

//  -- TODO: CREATE A SOCKET THAT EMITS ABOVE YOUTUBE URL TO PEERS IN THE NAMESPACE/LOBBY

// -- TODO: CREATE A SOCKET THAT SYNCS TIME UP WHEN THE HOST SKIPS AROUND IN A VIDEO