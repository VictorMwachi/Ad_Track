'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrackingLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrackingLink.init({
    trackingId: DataTypes.STRING,
    destinationUrl: DataTypes.TEXT,
    campaignId: DataTypes.STRING,
    source: DataTypes.STRING,
    medium: DataTypes.STRING,
    customParams: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'TrackingLink',
    tableName:'tracking_link',
    underscored:true
  });
  return TrackingLink;
};