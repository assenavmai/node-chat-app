var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'user2',
    text: 'yup hurr'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
  console.log('New email', email);
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
});