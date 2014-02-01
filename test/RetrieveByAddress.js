var postcodeanywhere = require("./../index");

postcodeanywhere.initialize("AM94-KE87-BA77-HK58");

postcodeanywhere.RetrieveByAddress({address: "SW11 3LJ"}, function(err, data) {

	if (err) { console.log(err.description); return false; }

	console.log("response:");
	console.log(data);
});



