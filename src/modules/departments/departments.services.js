const Department = require("../departments/department.model");

exports.doAddDepartment = async (req, res, next) => {
  const department = req.body;
  const addDepartment = await Department.create({ ...department });

  return res.status(200).send(addDepartment);
};

exports.doGetDepartment = async (req, res, next) => {
  const getDepartment = await Department.find({ isdeleted: false }).select(
    "departmentName"
  );
  return res.status(200).send(getDepartment);
};

exports.doGetDepartmentById = async (req, res, next) => {
  const { departmentId } = req.params;
  const getDepartment = await Department.findById({
    _id: departmentId,
    isdeleted: false,
  });
  return res.status(200).send(getDepartment);
};

exports.doUpdateDepartment = async (req, res, next) => {
  const { departmentId } = req.params;
  const getDepartment = await Department.findByIdAndUpdate(
    { _id: departmentId },
    { ...req.body },
    { new: true }
  );
  return res.status(200).send(getDepartment);
};
