/**
 * This js file is responsible for requesting the repository
 *  to insert the member in the database of the requested organization.
 */

var repo = require('../repository/repository');


exports.new = function(req,res){
    var dbModel = {
                login : req.body.login,
                avatarUrl : req.body.avatarUrl,
                followers : req.body.followers,
                following : req.body.following
                    }
    var dbName = req.params.dbName;

    repo.InsertMembers(dbName,dbModel,function (err,result){
        if(result){
            res.json({
                    Success : true,
                    Message : "Member successfully saved."
                });
            }
            else{
                res.json({
                    Success : false,
                    Message : "Member could not be saved." + err
                });
            }            
           });
        };