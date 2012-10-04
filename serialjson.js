var requestData = function(data) {
	return JSON.parse(data);
};

var sendData = function(response, total) {
	var x = JSON.stringify(total);
	response.writeHead(200, {
		'Content-Length' : x.length,
		'Content-Type' : 'application/json'
	});
	response.write(x);
	response.end();
};

exports.requestData = requestData;
exports.sendData = sendData;
