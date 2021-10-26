const User = require("../user/user.model");
const Department = require("../departments/department.model");
const auth = require("../../middleware/Auth");
const email = require("../mail/SignUp.mailer");

exports.doSignupUser = async (req, res, next) => {
  try {
    let user = new User(req.body);
    user = await user.save();

    console.log(user);
    if (user) {
      console.log(user);

      await email.sendSignUpMail({
        email: user.email,
        name: user.name,
      });

      return res.status(201).send("User has been Created");
    } else {
      return res.status(500).send("Cannot Create User");
    }
  } catch (err) {
    next(err);
  }
};

exports.doGetUserbyDepartment = async (req, res, next) => {
  try {
    const { department } = req.params;
    const getUser = await User.find({ department });
    return res.status(200).send(getUser);
  } catch (err) {
    next(err);
  }
};

exports.doDeleteUser = async (req, res, next) => {
  try {
    const { deleteUser } = req.body;
    const update = await User.findByIdAndUpdate(
      { _id: deleteUser },
      { active: false },
      { new: true }
    );
    return res.status(200).send(update);
  } catch (err) {
    next(err);
  }
};

exports.doActiveUser = async (req, res, next) => {
  try {
    const { activeUser } = req.body;
    const update = await User.findByIdAndUpdate(
      { _id: activeUser },
      { active: true },
      { new: true }
    );
    return res.status(200).send(update);
  } catch (err) {
    next(err);
  }
};

exports.doGetUser = async (req, res, next) => {
  try {
    const result = await User.findById({ _id: req.userId });
    if (result.length == 0) {
      return res.status(404).send("No Such User Found, Invalid Auth Token");
    }
    return res.status(200).send({ data: result });
  } catch (err) {
    next(err);
  }
};

exports.doChangePassword = async (req, res) => {
  try {
    const { Password } = req.body;
    const user = await User.findById({ _id: req.userId });

    console.log(user.password);
    user.password = Password;
    console.log(user);

    let result = await user.save();
    if (result.length == 0) {
      return res
        .status(500)
        .send({ Message: "No Such User Found, Invalid Auth Token" });
    }
    return res.status(200).send({ Message: " Password Updated successfully" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
