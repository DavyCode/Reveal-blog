/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //POST CONTROLLER
  home: function (req, res) {
    Post.find({}).exec(function(err, allPost) {
      if(err){
        res.send(500,
          {error: 'Could not create post'});
      }
      res.view('post/home', {post: allPost || []})
    })
  },	


   //SHOW CONTROLLER
  'show' : function(req, res) {

    Post.findOne({ 
      id: req.params.id
    })
    .exec(function(err, foundPost) {
      if(err){
        res.send(500,
           {error: 'Cannot find article with the given id : '+id}
        );
      }
      res.view('post/show', { post : foundPost});
    });
  },
  

  //CREATE POST 
  create: function(req, res) {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;
    var image = req.body.image;
    
    
    if(body.length > 0 && title.length > 0){
      Post.create(
        {
          title: title, 
          body: body
        })
        .exec(function(err) {
          if(err){
            res.send(500,
              {error: 'Could not create post'}
            );
          }
          res.redirect('/admin/dashboard');
        });
    }else{
         res.redirect('/admin/dashboard');
    }
  }
};

