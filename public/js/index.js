var socket = io();

socket.on('connect', function() {
	console.log('connected to server')

	socket.emit('createMessage', {
		text: 'hello world',
		from: 'greeter'
	});

	socket.on('newMessage', function(message) {
		console.log(message);
	});
});

socket.on('disconnect', function() {
	console.log('disconnected from server');
});

// socket.on('newEmail', function(email) {
// 	console.log('New email', email);
// });