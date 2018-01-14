/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //SHOW NEW CONTROLLER
  home: function (req, res) {
    res.view('post/home')
  },	
};

