/**
 * This js file is responsible for requesting the repository
 *  to get all the comments from the database of the requested organization.
 */

var repo = require('../repository/repository');
var stringConstants = require('./../stringConstants');


exports.view = function(req,res){
    var dbName = req.params.dbName;
    repo.GetAllComments(dbName,function (err,result){
        if(result && result.length != 0){
            res.json(
                {   Success : true,
                    Message : stringConstants.Comments_Fetch_Success,
                    Data : result
                }
            );
        }
        else{
            res.json(
                {   Success : false,
                    Message : stringConstants.Comments_Not_Found + dbName
                }
            );
        }       
    });
   
};