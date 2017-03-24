 var mongo = require('mongodb').MongoClient
 test = require('assert');

 DB_URL = "mongodb://localhost:27017/learnyoumongo"

 const AGE = process.argv[2]

 const query = {
     age: { $gt: parseInt(AGE) }
 }
 mongo.connect(DB_URL, function(err, db) {
     var collection = db.collection('parrots')
     collection.find(query).toArray(function(err, documents) {
         console.log(documents);
     })


     db.close();
 })