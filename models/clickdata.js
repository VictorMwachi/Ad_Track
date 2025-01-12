'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClickData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClickData.init({
    trackingId: DataTypes.STRING,
    gclid: DataTypes.STRING,
    userAgent: DataTypes.STRING,
    ipAddress: DataTypes.STRING,
    referrer: DataTypes.STRING,
    timestamp:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ClickData',
    tableName:'click_data',
    underscored:true
  });
  return ClickData;
};