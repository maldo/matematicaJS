var server = require("./server");
var serialjson = require("./serialjson");

var operation = {

	add : function(n, response) {
		var total = 0;
		for ( var i = 0; i < n.length; i++) {
			total += parseInt(n[i], 10);
		}

		response(total);
	},

	substrat : function(n, response) {
		var total = 0;
		for ( var i = 0; i < n.length; i++) {
			total = total - parseInt(n[i]);
		}

		response(total);
	},

	multiply : function(n, response) {
		var total = 1;
		for ( var i = 0; i < n.length; i++) {
			total = total * parseInt(n[i]);
		}

		response(total);
	},

	divide : function(n, response) {

		response(parseInt(n[0]) / parseInt(n[1]));
	}

};

server.start(operation, serialjson);