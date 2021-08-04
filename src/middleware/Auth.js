const jwt = require("jsonwebtoken");
exports.auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "stockpIlebYaAdiL");
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please Authenticate" });
  }
};
