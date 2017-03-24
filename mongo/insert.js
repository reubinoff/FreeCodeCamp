 var mongo = require('mongodb').MongoClient
 test = require('assert');

 DB_URL = "mongodb://localhost:27017/learnyoumongo"

 const a = process.argv[2]
 const b = process.argv[3]
 const doc = {
     firstName: a,
     lastName: b
 }
 mongo.connect(DB_URL, function(err, db) {
     var collection = db.collection('docs')
     collection.insert(doc, function(err, data) {
         console.log(JSON.stringify(doc));
         db.close();
     })



 })