/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {
    
    title: {
      type: 'string',
      // required: true
    },
    body:{
      type: 'string',
      // required: true
    }
    

    //RELATIONSHIP REFERENCE TO A CATEGORY
    ,category: {
      collection: 'postcategory',
      via: 'poster'
    }
    // ,
    // image : { 
    //   type : 'string',
    //    default: ""
    // }
  },
  connection: 'mongodbServer'
};

