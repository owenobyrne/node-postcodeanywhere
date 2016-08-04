var postcodeanywhere = require("./../index");

postcodeanywhere.initialize("XXXX-XXXX-XXXX-XXXX");

// Returns the full address details based on the address.
// Includes country name based on postcode area and the thoroughfare name components
// http://www.postcodeanywhere.co.uk/support/webservice/postcodeanywhere/interactive/retrievebyaddress/1.2/
postcodeanywhere.RetrieveByAddress({address: "SW11 3LJ"}, function(err, data) {
	if (err) { console.log(err.description); return false; }
	console.log("response:");
	console.log(data);
});

// Find addresses matching the search term.
// http://www.postcodeanywhere.co.uk/support/webservice/captureplus/interactive/find/2.1/
postcodeanywhere.CapturePlusInteractiveFind({searchTerm: "SW11 3LJ"}, function(err, data) {
	if (err) { console.log(err.description); return false; }
	console.log("response:");
	console.log(data);
});

// Returns the full address details based on the Id.
// http://www.postcodeanywhere.co.uk/support/webservice/captureplus/interactive/retrieve/2.1/
postcodeanywhere.CapturePlusInteractiveRetrieve({id: "GBR|23926131"}, function(err, data) {
	if (err) { console.log(err.description); return false; }
	console.log("response:");
	console.log(data);
});

// Validates Bank Validation by Account number/Sort code
// http://www.pcapredict.com/Support/WebService/BankAccountValidation/Interactive/Validate/2/
postcodeanywhere.BankAccountValidation({accountNumber: "12345678", sortCode: "000099"}, function(err, data) {
	if (err) { console.log(err.description); return false; }
	console.log("response:");
	console.log(data);
});