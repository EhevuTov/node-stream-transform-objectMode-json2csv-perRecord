var util = require('util');
var Json2csv = require('../index.js');
var stream = require('stream');
util.inherits(ReadStream, stream.Readable);

function ReadStream(opt){
	var options = opt || {};
	options.objectMode=true;
	stream.Readable.call(this, options);
}
var jsonArray = [
	{
		name: 'James',
		age: 34,
		city: 'Chicago'
	},
	{
		name: 'Danielle',
		age: 29,
		city: 'Chicago'
	}
];

ReadStream.prototype._read = function() {
	var stream = this;
	jsonArray.forEach(function(currVal, index, array){
		stream.push(currVal);
	});
	this.push(null);
};

var readStream = new ReadStream();
var json2csv = new Json2csv();

json2csv.on('data', function(data) { console.dir(data);});

readStream.pipe(json2csv);
