/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //POST CONTROLLER
  home: function (req, res) {
    res.view('post/home')
  },	
   //SHOW CONTROLLER
  show: function(req, res) {
    res.view('post/show')
  }
};

