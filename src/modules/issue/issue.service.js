const Issue = require("../issue/issue.model");
const Item = require("../items/item.model");
const validator = require("validator");
exports.doIssueItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const payload = req.body;
    payload.issuedBy = req.userId;
    payload.item = itemId;
    const item = await Item.findById({ _id: itemId });
    if (item) {
      if (item.unit.toString() != payload.unit.toString()) {
        return res
          .status(400)
          .send("Units Miss Match... Use Same units as per Item Discription");
      }
    }
    if (payload.quantityIssued > item.quantityAvailable) {
      return res
        .status(400)
        .send("Less Quantity is Available. Kindly Decrese the Quantity");
    }

    const issue = await Issue.create({ ...payload });
    if (issue) {
      item.quantityAvailable -= issue.quantityIssued;
      item.issuedTo.unshift({ issueId: issue._id });
      await item.save();
    }
    return res
      .status(200)
      .send({ Message: "Item Issued Successfully", data: issue });
  } catch (err) {
    next(err);
  }
};

exports.doUpdateIssueItem = async (req, res, next) => {
  try {
    const { issueId } = req.params;
    const payload = req.body;
    const issueItem = await Issue.findByIdAndUpdate(
      { _id: issueId },
      { ...payload },
      { new: true }
    );
    if (!issueItem) {
      return res.status(404).send("No Such Item issued Item found...!");
    }
    return res.status(200).send(issueItem);
  } catch (err) {
    next(err);
  }
};

exports.getIssueByDepartment = async (req, res, next) => {
  try {
    const { departmentId } = req.params;
    const issueByDept = await Issue.find({})
      .populate("item")
      .populate({
        path: "department",
        match: { department: departmentId },
      })
      .exec(function (err, issueItems) {
        if (!issueItems) {
          return res.status(404).send("No Such issued Item found...!");
        }
        return res.status(200).send(issueItems);
      });
  } catch (err) {
    next(err);
  }
};

exports.doGetIssueItemById = async (req, res, next) => {
  try {
    const { issueId } = req.params;
    const issuedItem = await Issue.findById({ _id: issueId });
    if (!issuedItem) {
      return res.status(404).send("No Such issued Item found...!");
    }
    return res
      .status(200)
      .send({ Message: "Item found...!", data: issuedItem });
  } catch (err) {
    next(err);
  }
};

exports.doGetIssueByLab = async (req, res, next) => {
  try {
    const { labId } = req.params;
    const issueByLab = await Issue.find({})
      .populate("item")
      .populate({
        path: "lab",
        match: { lab: labId },
      })
      .exec(function (err, issueItems) {
        if (!issueItems) {
          return res.status(404).send("No Such issued Item found...!");
        }
        return res.status(200).send(issueItems);
      });
  } catch (err) {
    next(err);
  }
};

exports.getIssueItembyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!validator.isEmail(email)) {
      return res.status(400).send({ Message: "Not a valid Email...!" });
    }
    const issueItems = await Issue.find({})
      .populate("item")
      .populate({
        path: "issuedTo",
        match: { email },
        select: "name",
      })
      .populate({
        path: "issuedBy",
        select: "name",
      })
      .exec(function (err, issueItems) {
        if (!issueItems) {
          return res.status(404).send("No Such issued Items found...!");
        }
        return res.status(200).send(issueItems);
      });
  } catch (err) {
    next(err);
  }
};
