/**
 * This js file is responsible for requesting the repository
 *  to insert the comment in the database of the requested organization.
 */

var repo = require('./../repository/repository');


exports.new = function(req,res){
    
    var comment = req.body.comment;
    if(Object.keys(req.body).length === 0 || comment === ""){
        res.status(400);
        res.send({
            Success : false,
            Message : "Please provide a comment."
        });
        return;
    }
    var dbModel = {comment : comment}
    var dbName = req.params.dbName;

    repo.InsertComments(dbName,dbModel,function (err,result){
        if(result){
            res.json({
                    Success : true,
                    Message : "Comment successfully saved."
                });
                return;
        }
        else{
            res.json({
                Success : false,
                Message : "Comment could not be saved. \n" + err
            });
        }        
    });
};