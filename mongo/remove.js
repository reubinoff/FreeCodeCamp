 var mongo = require('mongodb').MongoClient
 test = require('assert');
 const util = require('util')

 const db_name = process.argv[2]
 const collection_name = process.argv[3]
 const _id_ = process.argv[4]

 DB_URL = util.format("mongodb://localhost:27017/%s", db_name)


 const doc = {
     _id: _id_
 }
 mongo.connect(DB_URL, function(err, db) {
     var collection = db.collection(collection_name)
     collection.remove(doc, function(err, data) {
         if (err) return err
             //  console.log(data);
         db.close();
     })



 })