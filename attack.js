
/*
Creates DB instance
*/

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://fromo:1234asdf@from1991-shard-00-00-qraju.mongodb.net:27017,from1991-shard-00-01-qraju.mongodb.net:27017,from1991-shard-00-02-qraju.mongodb.net:27017/from1991?ssl=true&replicaSet=From1991-shard-0&authSource=admin"

MongoClient.connect(url, function(err, db) {
	var username;

	var readlineSync = require('readline-sync');
	 
	// Wait for user's response. 
	var username = readlineSync.question('Insert username to change its tag');
	console.log('Now changing tag for: ' + username);
	 
	storePassAndTag(username, 'virssss', 'tafff',function(){});

	function findUser( callback, user) {
	console.log("serching for user: "+user);
	var user =db.collection('users').find({username:user}).toArray(function(err, array){ 
		console.log(array);
		callback(array)
		});
}

function storePassAndTag (user,passwordsString,tag,callback) {
	console.log("user: "+user+" store passwords");
					        console.log("storing tag = " +tag);

	var update = {passwords : passwordsString , tag : tag };
	db.collection(user).replaceOne({},update, function(err, res) {
	 		 if (err) throw err;
	  		 callback(res);
	 });

}

});


