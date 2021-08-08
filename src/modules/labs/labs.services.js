const Lab = require("../labs/labs.model");
const Department = require("../departments/department.model");

exports.doAddLab = async (req, res, next) => {
  try {
    const createLab = req.body;
    console.log(createLab);
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
    const createLab = req.body;

    const addLab = await Lab.create({ ...createLab });
    return res.status(200).send(addLab);
  } catch (err) {
    next(err);
  }
};
