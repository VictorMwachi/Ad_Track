'use strict';
const { Model, Sequelize} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdminUser.init({
    username: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    createdAt:{
      type:DataTypes.DATE,
      allowNull:false
    },
    updatedAt:{
      type:DataTypes.DATE,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'AdminUser',
    tableName: 'admin_users',
    underscored: true 
  });
  return AdminUser;
};