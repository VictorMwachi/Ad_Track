'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Campaign.init({
    campaignid: DataTypes.BIGINT,
    name: DataTypes.STRING,
    goal: DataTypes.STRING,
    audience: DataTypes.STRING,
    platform: DataTypes.JSON,
    budget: DataTypes.DECIMAL,
    biddingstrategyid: DataTypes.BIGINT,
    target: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};