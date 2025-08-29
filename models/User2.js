const { DataTypes } = require('sequelize')
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  userid: {
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
  groupid: {
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
  payment: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  logo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  access_label: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  extra: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  isAC: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  isOdometer: {
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
  isImb: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  isNotification: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  isPadlock: {
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
  isMarcketvehicle: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  MemberSince: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  extraInfo: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  isGoogleMap: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  isCrackPadlock: {
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
  tableName: "users",
  timestamps: false,
});

export default User;
