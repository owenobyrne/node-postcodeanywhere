# node-postcodeanywhere

There is also a package [node-postcode-anywhere][node-postcode-anywhere], but it was written in CoffeeScript and I don't know CoffeeScript! I needed to add other API calls so I created this.

---------


How to use it?
---------------

````javascript

var postcodeanywhere = require("postcodeanywhere");

postcodeanywhere.initialize("XXXX-XXXX-XXXX-XXXX");

// returns a list of addresses matching a term.
postcodeanywhere.CapturePlusInteractiveFind({searchTerm: "SW11 3LJ"}, function(err, data) {
	if (err) { console.log(err.description); return false; }
	console.log(data);
});

// Returns the full address details based on the Id.
postcodeanywhere.CapturePlusInteractiveRetrieve({id: "GBR|23926131"}, function(err, data) {
	if (err) { console.log(err.description); return false; }
	console.log(data);
});
````

Installation
============

Via [npm][]:

     $ npm install postcodeanywhere
	
Or to install as a submodule of your project

	$ git submodule add http://github.com/owenobyrne/node-postcodeanywhere.git postcodeanywhere
	$ git submodule update --init
	
[npm]: https://github.com/isaacs/npm
[node-postcode-anywhere]: https://github.com/Bizzby/node-postcode-anywhere
