let router = require('express').Router();
var postController = require('./controllers/insertCommentsController');
var getController = require('./controllers/getCommentsController');
var deleteController = require('./controllers/deleteCommentsController');
var insertMembersController = require('./controllers/insertMembersController');
var getMembersController = require('./controllers/getMembersController');


router.get('/',function(req,res){
        res.json({
            status : 'Working',
            message : 'The default API is working'
        });
});

router.route('/:dbName/comments')
        .post(postController.new)
        .get(getController.view)
        .delete(deleteController.delete);
        
router.route('/:dbName/members')
        .post(insertMembersController.new)
        .get(getMembersController.view);



module.exports = router;
