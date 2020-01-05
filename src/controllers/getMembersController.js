/**
 * This js file is responsible for requesting the repository
 *  to get all the members from the database of the requested organization.
 */

var repo = require('../repository/repository');


exports.view = function(req,res){
    var dbName = req.params.dbName;
    repo.GetAllMembers(dbName,function (err,result){
        if(result){
            res.json(
                {   Success : true,
                    Message : "Members successfully fetched",
                    Data : result
                }
            );
        }
        res.json(
            {   Success : false,
                Message : "Members could not be fetched.\n" + err
            }
        );
    });
   
};