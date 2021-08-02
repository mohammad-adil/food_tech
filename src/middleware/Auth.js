const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "stockpIlebYaAdiL");
    req.UID = decoded.user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please Authenticate" });
  }
};

module.exports = auth;
