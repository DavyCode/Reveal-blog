/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// var category = require('./PostcategoryController');
// var Post = require('../models/PostController.js')




module.exports = {

  //Admin Dshboard
	dashboard: function(req, res) { 

    // console.log(category)
    // var categories = category.allCategory();
    // console.log('OKAY' + categories)
    Post.find({}).exec(function(err, post) {
      if(err){
        res.send(500, { error: "Cant find articles in database"})
      }
      res.view('admin/dashboard', {post: post});
    });  


    // Postcategory.find({}).exec(function(err, category) {
    //   if(err){
    //     res.send(500, { error: "Cant find articles in database"})
    //   }
    //   res.view('admin/dashboard', {category: category});
    //   console.log(category)
    // }); 


    // res.view('admin/dashboard', { category: categories}
    
  },


  //NEW POST 
  create: function(req, res) {
    // collect input to create post
  },

  //EDIT POST
  edit: function (req, res) {
    Post.findOne({ 
      id: req.params.id
    })
    .exec(function(err, foundPost) {
      if(err){
        res.send(500, {error: 'Cannot find post with the given id : ' +id}
        );
      }
      res.view('admin/edit', { foundPost : foundPost});
    });

  },

  //UPDATE POST
  update: function(req, res) {
    // handle updating post
    var title = req.body.title;
    var body = req.body.body;
    // var category = req.body.category;
    // var image = req.body.image;
    
    if(body.length > 0 && title.length > 0){
      Post.update({id: req.params.id},
        {
          title: title, 
          body: body
        })
        .exec(function(err) {
          if(err){
            res.send(500,
              {error: 'Could not update post'}
            );
          }
          res.redirect('/admin/dashboard');
        });
      }else{
         res.redirect('/admin/edit/'+req.params.id);
      }
  },

  delete: function(req, res) {
    Post.destroy({
      id: req.params.id
    })
    .exec(function(err) {
      if(err){
        res.send(500,
           {error: 'Could not delete article'}
        );
      }
      res.redirect('/admin/dashboard');
    });
    return false;
  }

};

