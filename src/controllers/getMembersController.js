/**
 * This js file is responsible for requesting the repository
 *  to get all the members from the database of the requested organization.
 */

var repo = require('../repository/repository');


exports.view = function(req,res){
    var dbName = req.params.dbName;
    repo.GetAllMembers(dbName,function (err,result){
        if(result && result.length != 0){
            res.json(
                {   Success : true,
                    Message : "Members successfully fetched",
                    Data : result
                }
            );
        }
        else{
            res.json(
                {   Success : false,
                    Message : "There were no members found for the organization : " + dbName
                }
            );
        }        
    });
   
};