 var mongo = require('mongodb').MongoClient
 test = require('assert');
 const util = require('util')

 const db_name = "learnyoumongo"
 const collection_name = "prices"
 const AGE = process.argv[2]

 DB_URL = util.format("mongodb://localhost:27017/%s", db_name)


 const agg = [{
         $match: {
             size: AGE
         }
     },
     {
         $group: {
             _id: null,
             total: {
                 $avg: "$price"
             }

         }
     }
 ]

 const query = {}
 mongo.connect(DB_URL, function(err, db) {
     var collection = db.collection(collection_name)
     collection.aggregate(agg).toArray(function(err, results) {
         // handle error
         console.log(Number(results[0].total).toFixed(2))
             // => [
             // =>   { _id: 'total', total: 11 }
             // => ]
         db.close();
     })




 })