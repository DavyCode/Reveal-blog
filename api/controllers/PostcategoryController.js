/**
 * PostcategoryController
 *
 * @description :: Server-side logic for managing postcategories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //CREATE POST 
  create: function(req, res) {
    var category = req.body.category;

    
    if(category.length > 0){
      Postcategory.create(
        {
          category: category, 
        })
        .exec(function(err) {
          if(err){
            res.send(500,
              {error: 'Could not create post'}
            );
          }
          res.redirect('/admin/dashboard');
          // flash a success message
        });
    }else{
         res.redirect('/admin/dashboard');
    }
}

  // allCategory: function () {
  //   Postcategory.find({}).exec(function(err, categories) {
  //     if(err){
  //       console.log( "Cant find any category in database")
  //     }
      
  //     return res.json(categories)
  //   }
  //   ); 
  // }
  // ,

  // foundCart: {
  //   cart,
  //   allFoundCartegory: function() {
  //     Postcategory.find({}).exec(function(err, categories) {
  //       if(err){
  //         console.log( "Cant find any category in database")
  //       }
  //       this.cart = categories
  //     }.bind(this)
  //     );
  //   }
  // }
  
}

