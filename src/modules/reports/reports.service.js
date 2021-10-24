const Purchase = require("../purchase/purchase.model");
const Issue = require("../issue/issue.model");
const Return = require("../return/return.model");
const Labs = require("../labs/labs.model");
const Departments = require("../departments/department.model");
const Items = require("../items/item.model");

exports.doGetByDate = async (req, res, next) => {
  try {
    console.log("Generating Report......");
    let { startDate, endDate } = req.params;

    const result = await Issue.find({
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .populate({
        path: "issuedTo",
        select: "name phone email universityId",
        populate: { path: "department", select: "departmentName" },
      })
      .populate({
        path: "issuedBy",
        select: "name",
      })
      .populate({
        path: "item",
        select: "itemName",
      });
    if (result.length == 0) {
      return res.status(404).send("No Items Were Found");
    }
    return res.status(200).send({ data: result });
  } catch (err) {
    next(err);
  }
};
