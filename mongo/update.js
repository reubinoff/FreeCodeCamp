 var mongo = require('mongodb').MongoClient
 test = require('assert');

 DB_URL = "mongodb://localhost:27017/learnyoumongo"

 const a = process.argv[2]
 const b = process.argv[3]
 const doc = {
     name: "Tina"
 }
 const upate_doc = {
     $set: {
         age: 40
     }
 }
 mongo.connect(DB_URL, function(err, db) {
     var collection = db.collection('users')
     collection.update(doc, upate_doc, function(err, data) {
         if (err) return err
             //  console.log(data);
         db.close();
     })



 })