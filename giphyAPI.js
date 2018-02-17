var express = require('express');
var app = express();
var server = app.listen(3000, listening);


function listening() {
	console.log('listening...')
}

app.use(express.static('client'));

console.log ("server is starting");








// app.get('/search/:gif', searchResults);

// function searchResults (reqest, response){
// 	let data = request.parms;
// 	response.send('This is my' + data.gif);
// };

