/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  // identity: 'post',
  attributes: {
    category: {
      
      name: {
        type: 'string',
        required: true 
      },

      //ADD A REFERENCE TO POST
      // poster: {
      //   model: 'post'
      // } 
    }
  }
};

