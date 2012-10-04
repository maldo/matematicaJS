var http = require("http");

var optionsAzure = {
	host : '192.168.7.13',
	port : 80,
	method : 'POST',
	path : 'http://matematica.azurewebsites.net/add',
	headers : {}
};

var options = {
		host : 'localhost',
		port : 8888,
		method : 'POST',
		path : '/add',
		headers : {}
	};

var data = JSON.stringify([5, 6]);

options.headers['Content-Type'] = 'application/json';
options.headers['Content-Length'] = data.length;

var req = http.request(optionsAzure, function(response) {
	console.log('STATUS: ' + response.statusCode);
	console.log('HEADERS: ' + JSON.stringify(response.headers));
	var responseData = '';
	response.on('data', function(chunk) {
		responseData += chunk;
	});

	response.on('end', function() {
		
		console.log(JSON.parse(responseData));
		
	});
});

req.write(data);
req.end();