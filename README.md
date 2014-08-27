object_mode-json2csv-per_record
===============================

[![Build Status](https://travis-ci.org/EhevuTov/node-stream-transform-objectMode-json2csv-perRecord.svg)](https://travis-ci.org/EhevuTov/node-stream-transform-objectMode-json2csv-perRecord)
# Description
A node transform stream in object mode that consumes a JSON object and produces a CSV record with optional header until null is consumed

Usage
-----

in your project root dir:
```
npm i object_mode-json2csv-per_record --save
```

in your program:
```
// require this module
var Json2csv = require('object_mode-json2csv-per_record');
// instantiate a new object from the module
var json2csv = new Json2csv();
// pipe from a readable stream that pipes out JSON objects one at a time
// 'readStream' is a readable stream you must create on your own
readStream.pipe(json2csv);
```
