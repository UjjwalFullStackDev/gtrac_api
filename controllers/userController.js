const { fn, col } = require("sequelize");
const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: [
        ["id", "userid"],
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
      order: [['id', 'DESC']],
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

module.exports = { getUsers };