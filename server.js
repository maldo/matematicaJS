var http = require("http");
var url = require("url");

function start(operation, method) {
	function onRequest(request, response) {
		var postData = '';
		var pathname = url.parse(request.url).pathname.split("/")[1];

		//console.log("Request for " + pathname + " received.");

		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			//console.log("Received POST data chunk '" + postDataChunk + "'.");
		});

		request.addListener("end", function() {

			try {

				var nums = method.requestData(postData);

				operation[pathname](nums, function(total) {

				method.sendData(response, total);

				});
			} catch (e) {
			}

		});

	}

	http.createServer(onRequest).listen(process.env.PORT || 8888);
	//console.log("Server has started.");
}

exports.start = start;