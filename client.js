var http = require("http");

var optionsAzure = {
	host : '192.168.7.13',
	port : 8080,
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

var optionsMatrix = {
		host : 'localhost',
		port : process.env.PORT,
		method : 'POST',
		path : '/add',
		headers : {}
	};

var data = JSON.stringify([5, 6]);

optionsAzure.headers['Content-type'] = 'application/json';
optionsAzure.headers['Content-length'] = data.length;
optionsAzure.headers['Host'] = 'matematica.azurewebsites.net';

var req = http.request(optionsAzure, function(response) {
	console.log('STATUS: ' + response.statusCode);
	console.log('HEADERS: ' + JSON.stringify(response.headers));
	var responseData = '';
	response.on('data', function(chunk) {
		responseData += chunk;
	});

	response.on('end', function() {
		
		console.log(responseData);
		
	});
});

req.write(data);
req.end();