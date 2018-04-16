const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
	console.log('new user connected');

	// socket.emit('newEmail', {
	// 	from: 'mike@example.com',
	// 	text: 'yo, long time no see',
	// 	createdAt: '124'
	// });
	socket.on('createMessage', (message) => {
		message.createdAt = new Date().getTime();
		console.log(message);
	});

	socket.on('disconnect', () => {
		console.log('client disconnected');
	});

	socket.emit('newMessage', {
		to: 'greeter',
		text: 'hi you',
		createdAt: 2189271
	});
});

server.listen(PORT, () => {
	console.log(`Server started on PORT: ${PORT}`);
});