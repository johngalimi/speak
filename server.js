const express = require('express');

var app = require('express')();

const http = require('http').Server(app)
const socket_io = require('socket.io')(http);

app.get('/', function(request, response) {
	//response.send('hello world');
	response.sendFile(__dirname + '/index.html');
});

/*
socket_io.on('connection', function(socket) {
	console.log('user connected');
	socket.on('chat message', function(message) {
		socket_io.emit('chat message', message);
	});
	socket.on('disconnect', function() {
		console.log('user disconnected');
	});
});
*/

socket_io.on('connection', function(socket) {
	console.log('user connected');
});

const server = http.listen(3000, function() {
	console.log('listening on *:3000');
})

