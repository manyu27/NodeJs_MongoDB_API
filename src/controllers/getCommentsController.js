/**
 * This js file is responsible for requesting the repository
 *  to get all the comments from the database of the requested organization.
 */

var repo = require('../repository/repository');


exports.view = function(req,res){
    var dbName = req.params.dbName;
    repo.GetAllComments(dbName,function (err,result){
        if(result && result.length != 0){
            res.json(
                {   Success : true,
                    Message : "Comments successfully fetched.",
                    Data : result
                }
            );
        }
        else{
            res.json(
                {   Success : false,
                    Message : "There were no comments found for the organization :" + dbName
                }
            );
        }       
    });
   
};