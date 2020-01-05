/**
 * This js file is responsible for requesting the repository
 *  to soft delete the comments from the database.
 */
var repo = require('./../repository/repository');

exports.delete = function(req,res){
    var dbName = req.params.dbName; /** Database name is fetched from the endpoint */
    repo.DeleteComments(dbName,function(result){
        if(result){
            res.json(
                {   Success : true,
                    Message : result
                }
            );
        }
        else{
            res.json(
                {   Success : false,
                    Message : "Comments were not deleted. Error occurred."
                }
            );
        }        
    });   
}