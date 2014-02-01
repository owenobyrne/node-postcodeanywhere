var postcodeanywhere = require("./../index");

postcodeanywhere.initialize("XXXX-XXXX-XXXX-XXXX");

postcodeanywhere.RetrieveByAddress({address: "SW11 3LJ"}, function(err, data) {

	if (err) { console.log(err.description); return false; }

	console.log("response:");
	console.log(data);
});



