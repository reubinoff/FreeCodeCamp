 var mongo = require('mongodb').MongoClient
 test = require('assert');
 const util = require('util')

 const db_name = "learnyoumongo"
 const collection_name = "parrots"
 const AGE = process.argv[2]

 DB_URL = util.format("mongodb://localhost:27017/%s", db_name)


 const query = {
     age: { $gt: parseInt(AGE) }
 }
 mongo.connect(DB_URL, function(err, db) {
     var collection = db.collection(collection_name)
     collection.count(query, function(err, data) {
         if (err) return err
         console.log(data);
         db.close();
     })



 })