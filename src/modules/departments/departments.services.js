const Department = require("../departments/department.model");

exports.doAddDepartment = async (req, res, next) => {
  const department = req.body;
  console.log("heyu");
  const addDepartment = await Department.create({ ...department });

  return res.status(200).send(addDepartment);
};

exports.doGetDepartment = async (req, res, next) => {
  const getDepartment = await Department.find({}).select("departmentName");
  return res.status(200).send(getDepartment);
};
