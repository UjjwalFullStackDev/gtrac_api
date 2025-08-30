const { fn, col } = require("sequelize");
const User = require("../models/User");
const UpdatedUser = require('../models/UpdatedUser')

const getUsers = async (req, res) => {
  try {
    const users = await UpdatedUser.findAll({
      attributes: [
        ["user_id", "userid"],
        "sys_username",
        "sys_password",
        "sys_parent_user",
        ["similartype_groupid", "groupid"],
        "company",
        "address",
        "billing_address",
        "mobile_number",
        "mobile_app_token",
        ["ac_status", "isAC"],
        ["is_odometer", "isOdometer"],
        "vehicleType",
        "isTemp",
        ["imb_password", "isImb"],
        ["show_notification", "isNotification"],
        "isMachine",
        "isEvehicle",
        "isAlcohol",
        ["is_marketvhl", "isMarcketvehicle"],
        [fn("YEAR", col("sys_added_date")), "MemberSince"],
        ["extrainforjson", "extraInfo"],
        ["is_googlemap", "isGoogleMap"],
        ["is_crackpadlock", "is_crackpadlock"],
        "isOnlyPolyline",
        "is_videotelematics",
      ],
      order: [['user_id', 'DESC']],
      raw: true,
    });
    if (!users || users.length === 0) {
      return res
        .status(400)
        .json({ status: false, message: "Users not found" });
    }

    res
      .status(200)
      .json({ status: true, message: "User fetched successfully",
      count: users.length,
      users});
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Internal server error", error });
  }
};



const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const user = await User.findByPk(id);
    console.log(user)
    if (!user) return res.status(404).json({ message: "User not found" });
    // Update only if data is different
    const changedFields = {};
    for (let key of Object.keys(updates)) {
      if (user[key] !== updates[key]) {
        changedFields[key] = updates[key];
      }
    }

    if (Object.keys(changedFields).length === 0) {
      return res.status(200).json({ message: "No changes detected" });
    }

    // Update main user table
    await user.update(changedFields);

    // Also update/insert into UserUpdates table
    await UpdatedUser.create({
  user_id: user.id,
  sys_username: user.sys_username,
  sys_password: user.sys_password,
  sys_parent_user: user.sys_parent_user,
  similartype_groupid: user.similartype_groupid,
  company: user.company,
  address: user.address,
  billing_address: user.billing_address,
  mobile_number: user.mobile_number,
  mobile_app_token: user.mobile_app_token,
  ac_status: user.ac_status,
  is_odometer: user.is_odometer,
  vehicleType: user.vehicleType,
  isTemp: user.isTemp,
  imb_password: user.imb_password,
  show_notification: user.show_notification,
  isMachine: user.isMachine,
  isEvehicle: user.isEvehicle,
  isAlcohol: user.isAlcohol,
  is_marketvhl: user.is_marketvhl,
  sys_added_date: user.sys_added_date,
  extrainforjson: user.extrainforjson,
  is_googlemap: user.is_googlemap,
  is_crackpadlock: user.is_crackpadlock,
  isOnlyPolyline: user.isOnlyPolyline,
  is_videotelematics: user.is_videotelematics,
});

    return res.json({ message: "User updated", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error",error });
  }
};


module.exports = { getUsers, updateUser };