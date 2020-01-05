/**
 * This js file is responsible for requesting the repository
 *  to insert the member in the database of the requested organization.
 */

var repo = require('../repository/repository');

exports.new = function(req,res){
    if(Object.keys(req.body).length === 0){
        res.status(400);
        res.send({
            Success : false,
            Message : "Invalid input."
        });
        return;
    }
    var login = req.body.login;
    var avatarUrl = req.body.avatarUrl;
    
    if(!login){
        res.status(400);
        res.send({
            Success : false,
            Message : "Please provide valid login detail."
        });
        return;
    }
    if(!avatarUrl){
        res.status(400);
        res.send({
            Success : false,
            Message : "Please provide valid avatar URL."
        });
        return;
    }
    var dbModel = {
                login : login,
                avatarUrl : avatarUrl,
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
                return;
            }
            else{
                res.json({
                    Success : false,
                    Message : "Member could not be saved." + err
                });
                return;
            }            
           });
        };