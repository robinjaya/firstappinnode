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
// const logger =require('./logger');
// logger.log('robin');
// console.log(logger);


const path = require('path');
var pathobj = path.parse(__filename);
// console.log(pathobj);

const os = require('os'); //os module
var totalmemory =os.totalmem();
var freememory = os.freemem();
// console.log(`total memory:${totalmemory}`);
// console.log(`free memory:${freememory}`);


const fs = require('fs'); //file system module
const files = fs.readdirSync('./');//synchornus file reading
// console.log(files);

fs.readdir('./',function(err,files){
// if(err) console.log('Error',err);
// else console.log('result',files);
});


 const EventEmitter = require('events'); //class
 const emitter = new EventEmitter();//object
//register a listner
emitter.on('messageLogged',function(arg){
    console.log('Listener Called',arg);
});
 //raise an event
 emitter.emit('messageLogged',{id:1,url:"http://"});
 //emit meaning - making a noise ,produce- signalling
