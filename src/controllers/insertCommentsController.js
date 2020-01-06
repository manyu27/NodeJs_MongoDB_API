/**
 * This js file is responsible for requesting the repository
 *  to insert the comment in the database of the requested organization.
 */

var repo = require('./../repository/repository');
var stringConstants = require('./../stringConstants');

exports.new = function(req,res){
    
    var comment = req.body.comment;
    if(Object.keys(req.body).length === 0 || comment === ""){
        res.status(400);
        res.send({
            Success : false,
            Message : stringConstants.Empty_Comment
        });
        return;
    }
    var dbModel = {comment : comment}
    var dbName = req.params.dbName;

    repo.InsertComments(dbName,dbModel,function (err,result){
        if(result){
            res.json({
                    Success : true,
                    Message : stringConstants.Comments_Saved_Success
                });
                return;
        }
        else{
            res.json({
                Success : false,
                Message : stringConstants.Comments_Saved_Fail + err
            });
        }        
    });
};