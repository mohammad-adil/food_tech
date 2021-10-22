const User = require("../user/user.model");
const Category = require("../category/category.model");
const Labs = require("../labs/labs.model");
const Issue = require("../issue/issue.model");
exports.doGetDetails = async (req, res, next) => {
  try {
    const { userId } = req;
    const admin = await User.countDocuments({ userRole: "admin" });
    const superAdmin = await User.countDocuments({ userRole: "superAdmin" });
    const activeUsers = await User.countDocuments({ active: true });
    const totalUsers = await User.countDocuments({});
    const totalLabs = await Labs.countDocuments({});
    const TotalIssuedItems = await Issue.countDocuments({});

    return res.status(200).send({
      admin,
      totalUsers,
      superAdmin,
      activeUsers,
      totalLabs,
      TotalIssuedItems,
    });
  } catch (err) {
    next(err);
  }
};
