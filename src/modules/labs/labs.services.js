const Lab = require("../labs/labs.model");
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
