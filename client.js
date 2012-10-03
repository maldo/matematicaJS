var http = require("http");

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

var req = http.request(options, function(response) {
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