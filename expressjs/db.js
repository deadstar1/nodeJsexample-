var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vulnapp');
// create new schema
var TodoSchema = new mongoose.Schema({
	name:String,
	completed:Boolean,
	note:String,
	updated_at:{type:Date,default: Date.now},
});
//create new model
var Todo = mongoose.model('Todo',TodoSchema);


//create new entries

function create_db(name,note){
	var entry={}
	entry['name']=name;
	entry['completed']=true;
	entry['note']=note;
	Todo.create(entry,function(err,todos){
	if(err) 
		console.log(err);
	else 
		console.log(todos);
		console.log('new entry was created');
	});

}
//find
function find_db(text,response){
	console.log('/////////////////////////');
	console.log('/////////////////////////');
	console.log('/////////////////////////');
	console.log('DB LIST');
	var entry={
	name:text
	}
	//entry['name']=text;
	Todo.find(entry,function (err,todos){
	if(err)
		return console.error(err);
	else{
		console.log('list of record');
		console.log(todos);
		return response.write('result for ' +  text + todos.toString());
		
		}

	});



}

exports.create_db=create_db;
exports.find_db=find_db;