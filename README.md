# node-postcodeanywhere

There is also a package [node-postcode-anywhere][node-postcode-anywhere], but it was written in CoffeeScript and I don't know CoffeeScript! I needed to add other API calls so I created this.

---------


How to use it?
---------------

````javascript

var postcodeanywhere = require("postcodeanywhere");

postcodeanywhere.initialize("XXXX-XXXX-XXXX-XXXX");

postcodeanywhere.RetrieveByAddress({address: "SW11 3LJ"}, function(err, data) {

	if (err) { console.log(err.description); return false; }

	console.log(data);
});
````

Installation
============

Via [npm][]:

     $ npm install postcodeanywhere
	
As a submodule of your project

	$ git submodule add http://github.com/owenobyrne/node-postcodeanywhere.git postcodeanywhere
	$ git submodule update --init
	
[npm]: https://github.com/isaacs/npm
[node-postcode-anywhere]: https://github.com/Bizzby/node-postcode-anywhere
