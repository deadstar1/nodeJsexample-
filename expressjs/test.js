var express = require('express');
var db=require('./db');
//var url = require('url');
//var querystring = require('querystring');
var app = express.createServer();


app.get('/', function(request,response){
	//postData=url.parse(request.url).query;
	//var search=querystring.parse(postData)['search'];
	var search=request.query['search'];
	var method=request.query['method'];
	
	
	var note=request.query['note'];
	var name=request.query['name'];
	//response.send("your search " + search + " ");
	if(method == "search_me"){
		//response.send('ddd');
		response.send('result for ' + search + db.find_db(search,response));
		response.end();	
	}
	else if(method == "add"){
		db.create_db(name,note);
	
	
	}
	else
	{
		response.write('fucke');
	}
	
	
	
	response.end();
	
});
app.listen(1337);
console.log('server @ 127.0.0.1:1337');