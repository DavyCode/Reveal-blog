/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //Admin Dshboard
	dashboard: function(req, res) {
    res.view('admin/dashboard')
  },

  // 
  new: function(req, res) {
    //show new modal on dashboard
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

