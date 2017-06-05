var express = require('express');
var points = require('./example-indoor-heatpoints-data');

var app = express();
var port = 8080;
app.get('heatpoints',function(req,res){
	res.send(processPoints(points));
});

app.listen(port,function(){
	console.log('listening on por '+port);
});

function processPoints(points){
	var limit = points.length;
	
	for(var i=0;i<limit;i++){

	}
}