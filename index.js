var requestify = require('requestify');
var baseURL = "http://services.postcodeanywhere.co.uk";
var KEY = "";

exports.initialize = function(key) {
	KEY = key;
};

exports.CapturePlusInteractiveFind = function(data, next) {

    requestify.request(baseURL + "/CapturePlus/Interactive/Find/v2.10/json3.ws", {
            method: "POST",
            params: {
				Key: KEY,
				SearchTerm: data.searchTerm,
				LastId : data.lastId,
				SearchFor : data.searchFor,
				Country : data.country,
				LanguagePreference : data.languagePreference,
				MaxSuggestions : data.maxSuggestions,
				MaxResults : data.maxResults				
			},
            dataType: "json"
            }
    )
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

exports.CapturePlusInteractiveRetrieve = function(data, next) {

    requestify.request(baseURL + "/CapturePlus/Interactive/Retrieve/v2.10/json3.ws", {
            method: "POST",
            params: {
				Key: KEY,
				Id: data.id				
			},
            dataType: "json"
            }
    )
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


exports.RetrieveByAddress= function(data, next) {

        requestify.request(baseURL + "/PostcodeAnywhere/Interactive/RetrieveByAddress/v1.20/json3.ws", {
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
