#CTM

Approach to the problem

# Read file
	# Buffering - Load the entire content at once
		# Async
		Asynchronously reads the whole content of a file.
		Example: 

		var fs = require('fs');
		fs.readFile('my-file.txt', 'utf8', function(err, data) {  
		    if (err) throw err;
		    console.log(data);
		});

		The callback is passed with 2 arguments (err, data), where data is the content of the file.
		If no encoding specified - utf8 in this case, the raw buffer is return. This is the widely use due to it's simplicity and non blocking.
		
		# Sync
		Synchronously read the whole content of a file.
		Examole:

	# Streaming - Load contents incrementally