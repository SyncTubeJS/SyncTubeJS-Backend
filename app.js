var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(1339);
console.log("Server Started.");

io.on('connection', function (socket) {
  socket.emit('console_message', { status: 'Connected! Hello World!' });

  // Test Code
  // socket.on('test_connect', function (data) {
  //   console.log(data);
  //   console.log(socket.id)

  //   socket.emit('console_message', { status: 'Payload Received Properly.' });
  // });

  // Logic that runs when a user joins an existing room or creates a new room
  socket.on('join_create_room', function(room_name){
    if(room_name.length > 0) {
      socket.join(room_name)
    } else {
      console.log('nope!')
    }

    // ONE AT A TIME This runs the Vuex action SOCKET_addRoomAction
    socket.emit('addRoomAction', room_name)
  })

  // "Logic" for chat function
  socket.on('new_message', function(message){
    socket.emit('addNewMessage', message)
  });

  //  -- TODO: CREATE SOCKET THAT ACCEPTS A YOUTUBE URL

  //  -- TODO: CREATE A SOCKET THAT EMITS ABOVE YOUTUBE URL TO PEERS IN THE NAMESPACE/LOBBY

  // -- TODO: CREATE A SOCKET THAT SYNCS TIME UP WHEN THE HOST SKIPS AROUND IN A VIDEO
});