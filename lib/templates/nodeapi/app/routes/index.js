///////////////////////////////////////////
// GET Home Page                         //
///////////////////////////////////////////

exports.index = function(req, res){
    res.render('index', {
        title : 'Page Title',
        description: 'Page Description',
        author: 'Name',
        analyticssiteid: 'XXXXXXX'
    });
};
