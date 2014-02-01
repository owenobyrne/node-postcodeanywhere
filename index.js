var requestify = require('requestify');
var APIVersion = "v1.20";
var baseURL = "http://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive";
var KEY = "";

exports.initialize = function(key) {
	KEY = key;
};

exports.RetrieveByAddress= function(data, next) {

        requestify.request(baseURL + "/RetrieveByAddress/" + APIVersion + "/json3.ws", {
                method: "POST",
                params: {
			Key: KEY,
			Address: data.address,
			Company: data.company
		},
                dataType: "json"
                })
                .then(function(response) {
			var body = JSON.parse(response.body);
			// Test for an error
			if (body.Items.length == 1 && typeof(body.Items[0].Error) != "undefined") {
			    // Show the error message
			    next( {
				description: body.Items[0].Description
			    }, null);
			}
			else {
			    // Check if there were any items found
			    if (body.Items.length == 0)
				next(null, []);
			    else {
				next(null, body.Items);
			    }
			}
		 });
};  
