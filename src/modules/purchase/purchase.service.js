const Purchase = require("../purchase/purchase.model");
const Item = require("../items/item.model");

exports.doPurchaseItem = async (req, res, next) => {
  try {
    const { userId } = req;
    req.body.enteredBy = userId;
    let payload = req.body;
    const item = await Item.findOne({
      _id: req.body.Item,
      department: payload.department,
    });
    if (item.length <= 0) {
      return res
        .status(404)
        .send({ Message: "No Such Item Found. Contact Administrator.. " });
    }
    const purchaseItem = await Purchase.create({ ...req.body });
    if (purchaseItem) {
      item.totalItemQuantity += purchaseItem.itemQuantity;
      item.purchasedAt.unshift({ purchaseId: purchaseItem._id });
      item.quantityAvailable += purchaseItem.itemQuantity;
      await item.save();
    }
    return res
      .status(201)
      .send({ Message: "Inserted Successfully. Item Updated...! " });
  } catch (err) {
    next(err);
  }
};

exports.doGetPurchasebyId = async (req, res, next) => {
  try {
    const { purchaseId } = req.params;
    const getPurchase = await Purchase.findOne({ _id: purchaseId });
    if (!getPurchase) {
      return res
        .status(404)
        .send({ Message: "No Such Purchase Found. Contact Administrator.. " });
    }
    return res.status(200).send(getPurchase);
  } catch (err) {
    next(err);
  }
};

exports.doGetPurchasebyLab = async (req, res, next) => {
  try {
    const { labId } = req.params;
    const getPurchaseByLab = await Purchase.find({ lab: labId });

    if (!getPurchaseByLab) {
      return res
        .status(404)
        .send({ Message: "No Such Purchase Found. Contact Administrator.. " });
    }

    return res.status(200).send(getPurchaseByLab);
  } catch (err) {
    next(err);
  }
};

exports.doGetPurchasebyDepartment = async (req, res, next) => {
  try {
    const { departmentId } = req.params;
    const getPurchaseByDept = await Purchase.find({
      department: departmentId,
    });

    if (!getPurchaseByDept) {
      return res
        .status(404)
        .send({ Message: "No Such Purchase Found. Contact Administrator.. " });
    }

    return res.status(200).send(getPurchaseByDept);
  } catch (err) {
    next(err);
  }
};

exports.doUpdatePurchase = async (req, res, next) => {
  try {
    const { purchaseId } = req.params;
    const query = { _id: purchaseId };
    const update = { ...req.body };
    const updatePurchase = await Purchase.findByIdAndUpdate(query, update, {
      new: true,
    });
    if (!updatePurchase) {
      return res.status(404).send({
        Message:
          "cannot Update..No Such Purchase Found. Contact Administrator.. ",
      });
    }
    return res.status(200).send(updatePurchase);
  } catch (err) {
    next(err);
  }
};
