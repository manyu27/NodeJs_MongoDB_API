/**
 * This js file is responsible for querying the database of the organization 
 * specified in the endpoint. All the database related queries and tasks are
 * operated from here itself.
 */

var mongoDb = require('mongodb').MongoClient;
var connString = process.env.CONN_STRING;
var mongoClient = null;

/** MongoDB client to connect to database for querying */
mongoDb.connect(connString,{ useNewUrlParser: true,useUnifiedTopology: true},(err,client) => {
  mongoClient = client;
});


/** This method is responsible for inserting the comment
 * in the "Comment" collection of the queried organization's database.
 */
exports.InsertComments = function (dbName,model,callback){
       var dbo = mongoClient.db(dbName);
      var collection = dbo.collection('Comment');
      collection.insertOne(model, (err, result) => {
          if(err){
            callback(err,null); // If there occurs an error, send back the error to the controller
          }
          callback(null,result); // Otherwise send the queried result
      });  
    }


/** This method is responsible for fetching all the comments
 * from the "Comment" collection of the queried organization's database.
 */
exports.GetAllComments = async function (dbName,callback){
  var dbo = mongoClient.db(dbName);
  var result = [];
  var collection = dbo.collection('Comment');
  var count = await ifDBExists(collection);
  if(count == 0){
    callback(null,null);
  }
  else{
    collection.find().toArray((err, items) => {
      if(err){
        callback(err,null);
      }
      items.forEach(element => {
        result.push(element.comment)
      });
      callback(null,result);
    });
  }
  
}


/** This method is responsible for soft deleting all the comments
 * from the "Comment" collection of the queried organization's database.
*/
exports.DeleteComments = async function (dbName,callback) {
  var dbo = mongoClient.db(dbName);
  var collection = dbo.collection('Comment');
  var count = await collection.countDocuments({});
 
  if(count == 0){
    callback("There does not exist any comments for the organization : "+dbName);
  }
  else{
    collection.find({}).forEach(function(doc){
    dbo.collection('Archived').insertOne(doc); // Inserts the document into "Archive" collection
    collection.deleteOne(doc);    // Deleted the document from the "Comment" collection
  });  
     callback("Comments were successfully deleted.");
  }      
}


/** This method is responsible for inserting the member's data
 * in the "Members" collection of the queried organization's database.
 */
exports.InsertMembers = function (dbName,model,callback){
  var dbo = mongoClient.db(dbName);
 var collection = dbo.collection('Members');
 collection.insertOne(model, (err, result) => {
     if(err){
       callback(err,null);
      }
     callback(null,result);
 });  
}


/** This method is responsible for fetching all the members
 * from the "Members" collection of the queried organization's database.
 */
exports.GetAllMembers = async function (dbName,callback){
  var dbo = mongoClient.db(dbName);
  var collection = dbo.collection('Members');
  var count = await ifDBExists(collection);
  if(count == 0){
    callback(null,null);
  }
  else{
    collection.find().sort({followers : -1}).toArray((err,items)=>{ // Sorts in descending order by the number of the followers a member has
      if(err){
        callback(err,null);      
      }
      callback(null,items);
    });  
  }  
}

async function ifDBExists(collection){
  return await collection.countDocuments({});
}




  