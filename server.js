const express = require('express');
const app = express();
const http = require('http').Server(app)
const socket_io = require('socket.io')(http);

app.get('/', function(request, response) {
	response.send('hello world');
});

const server = http.listen(8080, function() {
	console.log('listening on *:8080');
});
