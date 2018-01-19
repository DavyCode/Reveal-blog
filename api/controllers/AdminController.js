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
      console.log(post)
    });  

    // res.view('admin/dashboard', { category: categories}
    
  },


  //NEW POST 
  create: function(req, res) {
    // collect input to create post
  },

  //EDIT POST
  edit: function (req, res) {
    res.view('admin/edit')
  },

  //UPDATE POST
  update: function(req, res) {
    // handle updating post
  }

};

