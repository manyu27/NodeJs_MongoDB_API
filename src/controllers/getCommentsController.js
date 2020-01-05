/**
 * This js file is responsible for requesting the repository
 *  to get all the comments from the database of the requested organization.
 */

var repo = require('../repository/repository');


exports.view = function(req,res){
    var dbName = req.params.dbName;
    repo.GetAllComments(dbName,function (err,result){
        if(result){
            res.json(
                {   Success : true,
                    Message : "Comments successfully fetched.",
                    Data : result
                }
            );
        }
        res.json(
            {   Success : false,
                Message : "Comments could not be fetched.\n" + err
            }
        );
    });
   
};