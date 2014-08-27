var util = require('util');
var Transform = require('stream').Transform;
util.inherits(json2csv, Transform);

function json2csv(options) {
	if (!(this instanceof json2csv))
		return new json2csv(options);

	if (!options) {
		options = {};
	}

	options.objectMode = true;

	Transform.call(this, options);
	this._printHeader = options.printHeader || false;		// are we in the header?
	this._delimiter = options.charDelimiter || '^';			// the CSV delimiter
}

json2csv.prototype.unWind = function (buff) {
	for (var prop in buff) {
		if(typeof prop == 'object') {
			return unWind(buff);
		}
		else {
			return JSON.stringify(buff);
		}
	}
};

module.exports = json2csv;

json2csv.prototype._transform = function(chunk, encoding, done) {
	if(true === this._printHeader){
		for(var header in chunk){
			// write out CSV header columns
			this.push(header+this._delimiter);
		}
		this.push('\n');
		this._printHeader = false;
	}
	for(var p in chunk){
		// unwind the object
		if(typeof chunk[p] == 'object'){
			this.push(this.unWind(chunk[p])+this._delimiter);
		}
		else {
			this.push(chunk[p]+this._delimiter);
		}
	}
		this.push('\n');
		//this.push(null);
	done();
}
