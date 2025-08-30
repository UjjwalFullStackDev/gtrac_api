const { DataTypes } = require('sequelize');
// const sequelize = require("../config/db");
const sequelize = require("../config/dbLocal");

const UpdatedUser = sequelize.define("UpdatedUser", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  sys_username: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  sys_password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  sys_parent_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  similartype_groupid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  company: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  billing_address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  mobile_number: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  mobile_app_token: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  ac_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  is_odometer: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  vehicleType: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  isTemp: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  imb_password: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  show_notification: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  isMachine: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  isEvehicle: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  isAlcohol: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  is_marketvhl: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  sys_added_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  extrainforjson: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  is_googlemap: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  is_crackpadlock: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  isOnlyPolyline: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  is_videotelematics: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
}, {
  tableName: "updatedUsers",
  timestamps: false,
});

module.exports = UpdatedUser;
