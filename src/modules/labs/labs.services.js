const Lab = require("../labs/labs.model");
const Department = require("../departments/department.model");

exports.doAddLab = async (req, res, next) => {
  try {
    const createLab = req.body;
    const addLab = await Lab.create({ ...createLab });
    return res.status(200).send(addLab);
  } catch (err) {
    next(err);
  }
};

exports.doGetLabByDepartment = async (req, res, next) => {
  try {
    const { departmentId } = req.params;
    const addLab = await Lab.find({ department: departmentId });
    return res.status(200).send(addLab);
  } catch (err) {
    next(err);
  }
};

exports.doUpdateLab = async (req, res, next) => {
  try {
    const { labAdmin } = req.body;
    const labId = req.params.labId;
    const updatedLab = await Lab.findByIdAndUpdate(
      { _id: labId },
      { labAdmin },
      { new: true }
    );
    return res.status(200).send(updatedLab);
  } catch (err) {
    next(err);
  }
};

exports.doGetLabById = async (req, res, next) => {
  try {
    const { labId } = req.params;
    const getLab = await Lab.findOne({ _id: labId })
      .populate("department", ["departmentName"])
      .populate("labAdmin");
    return res.status(200).send(getLab);
  } catch (err) {
    next(err);
  }
};
