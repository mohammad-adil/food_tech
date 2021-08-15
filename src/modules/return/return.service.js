const Lab = require("../labs/labs.model");
const Department = require("../departments/department.model");
const User = require("../user/user.model");
const Return = require("../return/return.model");
const Issue = require("../issue/issue.model");

exports.doReturnItem = async (req, res, next) => {
  try {
    const { issueId } = req.params;
    const { userId } = req;
    req.body.recievedBy = userId;
    req.body.issueId = issueId;
    const issueItem = await Issue.findById({ _id: issueId });
    if (!issueItem) {
      return res.status(404).send({
        Message: "No Such Issued Item Found. Contact Administrator.. ",
      });
    }
    if (issueItem.returnable == false) {
      return res.status(400).send({
        Message: "Item is Non-Returnable. Contact Administrator.. ",
      });
    }
    const returnItem = await Return.create({ ...req.body });
    if (!returnItem) {
      res.status(500).send("Unable to Return.. Conatct Admintsrator...");
    }
    res.status(201).send(returnItem);
  } catch (err) {
    next(err);
  }
};

exports.doGetReturnById = async (req, res, next) => {
  try {
    const { returnId } = req.params;
    const getReturn = await Return.findById({ _id: returnId });
    if (getReturn) {
      res.status(200).send(getReturn);
    } else {
      res.status(404).send("No Such item found");
    }
  } catch (err) {
    next(err);
  }
};
/*
exports.doGetItemByDepartment = async (req, res, next) => {
  try {
    const { departmentId } = req.params;
    const getItemByDepartment = await Item.find({ department: departmentId });
    if (getItemByDepartment) {
      res.status(200).send(getItemByDepartment);
    } else {
      res.status(404).send("No Such item Found in Department");
    }
  } catch (err) {
    next(err);
  }
};

exports.doGetItemByLab = async (req, res, next) => {
  try {
    const { labId } = req.params;
    const getItemByDepartment = await Item.find({ lab: labId });
    if (getItemByDepartment) {
      res.status(200).send(getItemByDepartment);
    } else {
      res.status(404).send("No Such item Found in Lab");
    }
  } catch (err) {
    next(err);
  }
};
 */
exports.doUpdateReturn = async (req, res, next) => {
  try {
    const { returnId } = req.params;
    const query = { _id: returnId };
    const update = { ...req.body };
    const updateItem = await Return.findByIdAndUpdate(query, update, {
      new: true,
    });
    if (!updateItem) {
      return res
        .status(404)
        .send("No Such item Found to Update. Update Failed");
    }
    return res
      .status(200)
      .send({ message: "Item Updated Successfully", data: updateItem });
  } catch (err) {
    next(err);
  }
};
