/**
 * This js file is responsible for requesting the repository
 *  to insert the comment in the database of the requested organization.
 */

var repo = require('./../repository/repository');


exports.new = function(req,res){
    var dbModel = {comment : req.body.comment}
    var dbName = req.params.dbName;

    repo.InsertComments(dbName,dbModel,function (err,result){
        if(result){
            res.json({
                    Success : true,
                    Message : "Comment successfully saved."
                });
        }
        else{
            res.json({
                Success : false,
                Message : "Comment could not be saved. \n" + err
            });
        }        
    });
};