const Lab = require("../labs/labs.model");
exports.doAddLab = async (req, res, next) => {
  try {
    const createLab = req.body;
    const addLab = await Lab.create({ ...createLab });
  } catch (err) {
    next(err);
  }
};
