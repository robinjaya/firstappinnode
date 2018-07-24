// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
// 		// res.writeHead(200, {'Content-Type': 'text/html'});
// 		// res.write("The date and time are currently: " + dt.myDateTime());
// 		// res.end();
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// 	res.write('<input type="file" name="filetoupload"><br>');
// 	res.write('<input type="submit">');
// 	res.write('</form>');
// 	return res.end();
// }).listen(4200);

// function sayhello(name)
// {
// 	console.log('hello'+name);

// }
// sayhello('robin');
// setTimeout()
const logger =require('./logger');
logger.log('robin');
// console.log(logger);


