const Lab = require("../labs/labs.model");
const Department = require("../departments/department.model");
const User = require("../user/user.model");
const Item = require("../items/item.model");

exports.doAddItem = async (req, res, next) => {
  try {
    const { userId } = req;
    req.body.enteredBy = userId;
    console.log(req.body);
    const getItem = await Item.create({ ...req.body });
    if (getItem) {
      res.status(200).send(getItem);
    }
  } catch (err) {
    next(err);
  }
};

exports.doGetItemById = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const getItem = await Item.findById({ _id: itemId });
    if (getItem) {
      res.status(200).send(getItem);
    } else {
      res.status(404).send("No Such item found");
    }
  } catch (err) {
    next(err);
  }
};

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

exports.doUpdateItem = async (req, res, next) => {};
