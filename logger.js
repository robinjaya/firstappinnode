const EventEmitter = require('events'); //class
const emitter = new EventEmitter();//object
// console.log(__filename);
// console.log(__dirname);
var url = 'http://gmail.com'
function log(message)
{
	console.log(message);
}
module.exports.log = log;