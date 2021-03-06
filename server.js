var app = require('express')();
var  http = require('http').Server(app)
var socket_io = require('socket.io')(http);

//expose port 3000 with ./ngrok http 3000 and then give link

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

socket_io.on('connection', function(socket) {
	console.log('user connected');

	socket.on('chat message', function(message) {
		console.log('message: ' + message);
		socket_io.emit('chat message', message);
	});

	socket.on('disconnect', function() {
		console.log('user disconnected');
	});
});

http.listen(3000, function() {
	console.log('listening on *:3000');
});
