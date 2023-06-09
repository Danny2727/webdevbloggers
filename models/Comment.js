
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
   body: {
    type: DataTypes.STRING,
    allowNull: false
   },
   date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,   
},
  },
   {
    sequelize
   }
  )

  module.exports = Comment;