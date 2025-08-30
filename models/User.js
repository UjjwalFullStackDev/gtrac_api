const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const sequelize = require('../config/dbLocal');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  sys_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: null
  },
  sys_old_customer_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0
  },
  sys_payment_status_off: {
    type: DataTypes.INTEGER(1),
    defaultValue: 0,
    comment: '1=DeActivate For Payment,0=Activate'
  },
  sys_payment_status_update_date: {
    type: DataTypes.DATE,
    defaultValue: null
  },
  sys_is_dealer: {
    type: DataTypes.INTEGER(1),
    defaultValue: 0
  },
  similartype_user: {
    type: DataTypes.INTEGER(1),
    defaultValue: 0
  },
  similartype_userid: {
    type: DataTypes.INTEGER(1),
    defaultValue: 0
  },
  similartype_groupid: {
    type: DataTypes.INTEGER(1),
    defaultValue: 0
  },
  sys_username: {
    type: DataTypes.STRING(500),
    allowNull: false,
    unique: true
  },
  sys_password: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  access_label: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  sys_smscredits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  sys_parent_user: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  sys_sub_parentuser: {
    type: DataTypes.BIGINT.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  sys_profile_last_confirmed: {
    type: DataTypes.DATE,
    defaultValue: null
  },
  sys_map_type: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false
  },
  sys_timezone: {
    type: DataTypes.STRING(50),
    defaultValue: 'Europe/London',
    allowNull: false
  },
  timezone_minute: {
    type: DataTypes.INTEGER,
    defaultValue: 330,
    allowNull: false
  },
  sys_culture: {
    type: DataTypes.STRING(10),
    defaultValue: 'en-GB',
    allowNull: false
  },
  aud_last_login: {
    type: DataTypes.DATE,
    defaultValue: null
  },
  aud_last_ip_address: {
    type: DataTypes.STRING(50),
    defaultValue: null
  },
  aud_user_agent: {
    type: DataTypes.STRING(200),
    defaultValue: null
  },
  fullname: {
    type: DataTypes.STRING(100),
    defaultValue: null
  },
  secondary_person_name: {
    type: DataTypes.STRING(200),
    defaultValue: null
  },
  company: {
    type: DataTypes.STRING(100),
    defaultValue: null
  },
  address: {
    type: DataTypes.STRING(500),
    defaultValue: null
  },
  postcode: {
    type: DataTypes.STRING(20),
    defaultValue: null
  },
  billing_address: {
    type: DataTypes.TEXT,
    defaultValue: null
  },
  email_address: {
    type: DataTypes.TEXT,
    defaultValue: null
  },
  extra_email: {
    type: DataTypes.TEXT,
    defaultValue: null
  },
  phone_number: {
    type: DataTypes.STRING(225),
    defaultValue: null
  },
  fax_number: {
    type: DataTypes.STRING(300),
    defaultValue: null,
    comment: 'Zone group id for ecom'
  },
  mobile_number: {
    type: DataTypes.STRING(225),
    defaultValue: null
  },
  tin_number: {
    type: DataTypes.STRING(100),
    defaultValue: null
  },
  account_user_id: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  collectionboy_id: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  mobile_confirm_code: {
    type: DataTypes.STRING(50),
    defaultValue: null
  },
  mobile_confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: null
  },
  sys_added_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  amount_received: {
    type: DataTypes.FLOAT.UNSIGNED,
    defaultValue: 0
  },
  sales_user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: null
  },
  default_vehicle_type: {
    type: DataTypes.TINYINT.UNSIGNED,
    defaultValue: 1,
    comment: '0=Car,1=Truck'
  },
  ac_status: {
    type: DataTypes.TINYINT.UNSIGNED,
    defaultValue: 0,
    comment: '0=Off,1=On'
  },
  log: {
    type: DataTypes.TEXT,
    defaultValue: null
  },
  billing_region: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  company_region: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  price_per_unit: {
    type: DataTypes.FLOAT.UNSIGNED,
    defaultValue: 350
  },
  changepswd_status: {
    type: DataTypes.INTEGER(1),
    defaultValue: 1,
    allowNull: false
  },
  changepswd_date: {
    type: DataTypes.STRING(200),
    defaultValue: null
  },
  create_journey: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  green_userlist: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  no_bill: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  KM_for: {
    type: DataTypes.STRING(11),
    defaultValue: '0',
    allowNull: false
  },
  zone_id: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  client_type: {
    type: DataTypes.STRING(50),
    defaultValue: null
  },
  branch_id: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  sms_keyword: {
    type: DataTypes.STRING(50),
    defaultValue: null,
    comment: 'vloc location keyword'
  },
  different_site: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0,
    comment: 'login from different side'
  },
  vendor: {
    type: DataTypes.INTEGER(3),
    defaultValue: 1,
    comment: '1-Gtrac,2-Atlanta'
  },
  imb_password: {
    type: DataTypes.STRING(100),
    defaultValue: null,
    comment: '1-Gtrac,2-Atlanta'
  },
  show_notification: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  show_app_status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  theme_status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  acc_reason: {
    type: DataTypes.TEXT,
    defaultValue: null
  },
  deactivate_date: {
    type: DataTypes.STRING(500),
    defaultValue: null
  },
  again_activate_date: {
    type: DataTypes.STRING(500),
    defaultValue: null
  },
  telecaller: {
    type: DataTypes.STRING(50),
    defaultValue: null
  },
  admin_password: {
    type: DataTypes.STRING(50),
    defaultValue: null
  },
  affable_domain: {
    type: DataTypes.STRING(200),
    defaultValue: null,
    comment: 'state group id for ecom'
  },
  read_status: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  only_dashboard: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  is_odometer: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  isTemp: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  isFuel: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  isMachine: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  isEvehicle: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  isAlcohol: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  is_marketvhl: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  is_googlemap: {
    type: DataTypes.INTEGER(3),
    defaultValue: 1
  },
  is_crackpadlock: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  isOnlyPolyline: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  AI: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  is_videotelematics: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  },
  mobile_app_token: {
    type: DataTypes.STRING(500),
    defaultValue: null
  },
  vehicleType: {
    type: DataTypes.STRING(500),
    defaultValue: 'TRUCK'
  },
  rep_date_format: {
    type: DataTypes.STRING(50),
    defaultValue: 'Y-m-d',
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING(500),
    defaultValue: 'logo.png'
  },
  baseurl: {
    type: DataTypes.STRING(500),
    defaultValue: 'appv11'
  },
  extrainforjson: {
    type: DataTypes.TEXT,
    defaultValue: null
  },
  speedcheck: {
    type: DataTypes.INTEGER,
    defaultValue: 140
  }
}, {
  tableName: 'users',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['sys_username']
    },
    {
      fields: ['sys_username', 'sys_password']
    }
  ],
  engine: 'InnoDB',
  charset: 'latin1',
  rowFormat: 'DYNAMIC'
});

module.exports = User;